// src/hooks/useEvents.ts
import { useState, useEffect } from "react";

export interface Event {
  id: string;
  title: string;
  description: string;
  eventDate: string;
  location: string;
  time: string;
  image: {
    url: string;
    title: string;
  };
  actionLink: string;
  actionText: string;
  slug: string;
  day: string;
  month: string;
  meta: string;
}

const spaceId = "gthdsgcv2h5h";
const accessToken = "VHUN5zQjJzdS08fNWIXBSzf4GpkS_gvyZVXWbavMcIg";

const API_BASE = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries`;
const ASSET_BASE = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/assets`;

async function fetchAsset(
  assetId: string
): Promise<{ url: string; title: string } | null> {
  if (!assetId) return null;
  
  try {
    const url = `${ASSET_BASE}/${assetId}?access_token=${accessToken}`;
    console.log("Fetching asset:", url);
    
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Asset fetch failed: ${response.status} ${response.statusText}`);
      return null;
    }
    
    const data = await response.json();
    console.log("Asset response:", data);
    
    if (data.fields && data.fields.file && data.fields.file.url) {
      let fileUrl = data.fields.file.url;
      if (fileUrl.startsWith("//")) {
        fileUrl = `https:${fileUrl}`;
      } else if (!fileUrl.startsWith("https://")) {
        fileUrl = `https://${fileUrl}`;
      }
      return {
        url: `${fileUrl}?w=400&h=300&fit=crop`,
        title: data.fields.title || "Event Image",
      };
    }
    return null;
  } catch (err) {
    console.error("Error fetching asset", assetId, ":", err);
    return null;
  }
}

export const useEvents = (limit: number = 10) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<any>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      if (!spaceId || !accessToken) {
        const configError = "Contentful configuration missing";
        console.error(configError);
        setError(configError);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        // First, let's try to fetch all content types to verify the connection
        const debugUrl = `${API_BASE}?access_token=${accessToken}&limit=1`;
        console.log("Testing connection with URL:", debugUrl);
        
        const debugResponse = await fetch(debugUrl);
        if (!debugResponse.ok) {
          throw new Error(`Connection test failed: ${debugResponse.status} ${debugResponse.statusText}`);
        }
        
        const debugData = await debugResponse.json();
        console.log("Connection test successful. Available entries:", debugData);
        setDebugInfo(debugData);

        // Now try to fetch events specifically
        const url = `${API_BASE}?access_token=${accessToken}&content_type=event&limit=${limit}&order=-fields.eventDate&include=1`;
        console.log("Fetching events with URL:", url);
        
        const response = await fetch(url);

        if (!response.ok) {
          const errorText = await response.text();
          console.error("API Error Response:", errorText);
          
          // Try without the content_type filter to see if there are any entries
          const fallbackUrl = `${API_BASE}?access_token=${accessToken}&limit=${limit}&include=1`;
          console.log("Trying fallback URL:", fallbackUrl);
          
          const fallbackResponse = await fetch(fallbackUrl);
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            console.log("Fallback response (all content types):", fallbackData);
            
            if (fallbackData.items && fallbackData.items.length > 0) {
              const contentTypes = [...new Set(fallbackData.items.map((item: any) => 
                item.sys?.contentType?.sys?.id || 'unknown'
              ))];
              console.log("Available content types:", contentTypes);
              
              throw new Error(
                `No events found. Available content types: ${contentTypes.join(', ')}. ` +
                `Make sure your content type is named 'event' in Contentful.`
              );
            } else {
              throw new Error("No content found in this Contentful space.");
            }
          }
          
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        console.log("Events API Response:", data);
        
        // Additional debugging for empty results
        if (data.total === 0) {
          console.warn("No events returned. Checking possible causes...");
          
          // Check if there are any entries at all
          const allEntriesUrl = `${API_BASE}?access_token=${accessToken}&limit=5`;
          const allEntriesResponse = await fetch(allEntriesUrl);
          
          if (allEntriesResponse.ok) {
            const allEntriesData = await allEntriesResponse.json();
            console.log("All entries in space:", allEntriesData);
            
            if (allEntriesData.items && allEntriesData.items.length > 0) {
              const contentTypes = [...new Set(allEntriesData.items.map((item: any) => 
                item.sys?.contentType?.sys?.id || 'unknown'
              ))];
              
              setError(
                `No events found. Your Contentful space has ${allEntriesData.total} entries ` +
                `with content types: ${contentTypes.join(', ')}. ` +
                `Make sure your content type is exactly named 'event' (case-sensitive).`
              );
            } else {
              setError("Your Contentful space appears to be empty.");
            }
          }
          
          setEvents([]);
          return;
        }

        const items = data.items || [];

        const processedEvents = await Promise.all(
          items.map(async (item: any) => {
            try {
              const fields = item.fields;
              console.log("Processing event item:", item);

              if (!fields) {
                console.warn("Event item has no fields:", item);
                return null;
              }

              let image = { url: "", title: fields.title || "Event Image" };
              if (fields.image) {
                console.log("Processing image field:", fields.image);
                
                if (Array.isArray(fields.image) && fields.image.length > 0) {
                  const firstImageLink = fields.image[0];
                  if (firstImageLink?.sys?.id) {
                    const asset = await fetchAsset(firstImageLink.sys.id);
                    if (asset) image = asset;
                  }
                } else if (fields.image.sys?.id) {
                  // Handle case where image is a direct reference, not an array
                  const asset = await fetchAsset(fields.image.sys.id);
                  if (asset) image = asset;
                }
              }

              if (!fields.eventDate) {
                console.warn("Event missing eventDate:", fields);
              }

              const eventDate = fields.eventDate ? new Date(fields.eventDate) : new Date();
              const day = eventDate.getDate().toString().padStart(2, "0");
              const month = eventDate
                .toLocaleDateString("en-US", { month: "short" })
                .toUpperCase();

              const locationIcon = fields.location
                ?.toLowerCase()
                .includes("virtual")
                ? "🌐"
                : "📍";
              const meta = `${locationIcon} ${fields.location || "TBD"} • 🕐 ${
                fields.time || "TBD"
              }`;

              return {
                id: item.sys.id,
                title: fields.title || "Untitled Event",
                description: fields.description || "",
                eventDate: fields.eventDate || "",
                location: fields.location || "",
                time: fields.time || "",
                image,
                actionLink: fields.actionLink || "#",
                actionText: fields.actionText || "Learn More →",
                slug: fields.slug || "",
                day,
                month,
                meta,
              };
            } catch (itemError) {
              console.error("Error processing event item:", item, itemError);
              return null;
            }
          })
        );

        // Filter out null values from failed processing
        const validEvents = processedEvents.filter((event): event is Event => event !== null);
        
        console.log("Processed events:", validEvents);
        setEvents(validEvents);
        
      } catch (err) {
        console.error("Error fetching events:", err);
        
        let errorMessage = "Failed to fetch events";
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        
        // Add helpful suggestions based on common issues
        if (errorMessage.includes("401") || errorMessage.includes("Unauthorized")) {
          errorMessage += ". Check if your Contentful access token is valid and has the correct permissions.";
        } else if (errorMessage.includes("404") || errorMessage.includes("Not Found")) {
          errorMessage += ". Check if your Contentful space ID is correct.";
        } else if (errorMessage.includes("content_type")) {
          errorMessage += ". Make sure your Contentful content type is exactly named 'event'.";
        }
        
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [limit]);

  // Return debug info for development
  return { 
    events, 
    loading, 
    error, 
    debugInfo: process.env.NODE_ENV === 'development' ? debugInfo : undefined 
  };
};