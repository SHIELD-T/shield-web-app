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
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
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

  useEffect(() => {
    const fetchEvents = async () => {
      if (!spaceId || !accessToken) {
        setError("Contentful configuration missing");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const url = `${API_BASE}?access_token=${accessToken}&content_type=event&limit=${limit}&order=-fields.eventDate&include=1`;

        console.log("Fetching events with URL:", url);
        const response = await fetch(url);

        if (!response.ok) {
          const errorText = await response.text();
          console.error("API Error Response:", errorText);
          setError(`HTTP ${response.status}: ${errorText}`);
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        console.log("Events API Response:", data);
        const items = data.items || [];

        const processedEvents = await Promise.all(
          items.map(async (item: any) => {
            const fields = item.fields;

            let image = { url: "", title: fields.title || "Event Image" };
            if (
              fields.image &&
              Array.isArray(fields.image) &&
              fields.image.length > 0
            ) {
              const firstImageLink = fields.image[0];
              if (firstImageLink.sys && firstImageLink.sys.id) {
                const asset = await fetchAsset(firstImageLink.sys.id);
                if (asset) image = asset;
              }
            }

            const eventDate = new Date(fields.eventDate);
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
              title: fields.title || "",
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
          })
        );

        console.log("Processed events:", processedEvents);
        setEvents(processedEvents);
      } catch (err) {
        console.error("Error fetching events:", err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to fetch events");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [limit]);

  return { events, loading, error };
};
