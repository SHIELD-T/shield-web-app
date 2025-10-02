# Donation Page Setup Guide

This guide provides instructions for developers to configure the PayPal donation functionality and understand the email integration in the SHIELD Web App donation page.

## Overview

The donation page (`src/pages/donate.tsx`) has been configured to use PayPal as the primary payment method with email fallbacks for alternative payment methods and report requests.

## PayPal Button Configuration

### Required PayPal Button IDs

The following placeholder button IDs need to be replaced with actual PayPal donation button IDs:

| Placeholder ID | Purpose | Location in Code |
|---|---|---|
| `YOUR_BUTTON_ID_25` | $25 fixed donation | Line 191 |
| `YOUR_BUTTON_ID_100` | $100 fixed donation | Line 207 |
| `YOUR_BUTTON_ID_500` | $500 fixed donation | Line 222 |
| `YOUR_CUSTOM_BUTTON_ID` | Custom amount donation | Line 239 |
| `YOUR_MONTHLY_BUTTON_ID` | Monthly recurring donation | Line 283 |
| `YOUR_GENERAL_BUTTON_ID` | General one-time donation | Line 476 |

### How to Get PayPal Button IDs

1. **Log into PayPal Business Account**
   - Go to [PayPal Business](https://www.paypal.com/us/business)
   - Sign in to your business account

2. **Create Donation Buttons**
   - Navigate to "Tools" → "PayPal Buttons"
   - Select "Donations" button type
   - Configure each button with the appropriate amount (for fixed amounts)
   - For custom amounts, select "Let donors enter their own amount"
   - For monthly donations, set up recurring payments

3. **Extract Button ID**
   - After creating each button, PayPal will provide HTML code
   - Look for the `hosted_button_id` parameter in the generated code
   - Example: `hosted_button_id=ABC123XYZ789`
   - Copy the ID (e.g., `ABC123XYZ789`)

4. **Replace Placeholder IDs**
   - Find and replace each placeholder with the actual button ID
   - Example:
     ```typescript
     // Before
     href="https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID_25"
     
     // After
     href="https://www.paypal.com/donate/?hosted_button_id=ABC123XYZ789"
     ```

### Button Configuration Examples

#### Fixed Amount Button ($25)
```typescript
<a href="https://www.paypal.com/donate/?hosted_button_id=ACTUAL_25_BUTTON_ID" 
   target="_blank" 
   rel="noopener noreferrer" 
   className="donate-btn donate-btn-primary">
  Donate $25 via PayPal
</a>
```

#### Custom Amount Button
```typescript
<a href="https://www.paypal.com/donate/?hosted_button_id=ACTUAL_CUSTOM_BUTTON_ID" 
   target="_blank" 
   rel="noopener noreferrer" 
   className="donate-btn donate-btn-secondary">
  Donate via PayPal
</a>
```

#### Monthly Recurring Button
```typescript
<a href="https://www.paypal.com/donate/?hosted_button_id=ACTUAL_MONTHLY_BUTTON_ID" 
   target="_blank" 
   rel="noopener noreferrer" 
   className="donate-btn donate-btn-primary">
  Start Monthly Giving via PayPal
</a>
```

## Email Integration

### Automatic Email Functionality

The following buttons automatically open the user's default email client with pre-filled information:

#### Alternative Payment Methods Inquiry
- **Email**: info@shieldintl.org
- **Subject**: Alternative Payment Methods Inquiry
- **Location**: Line 247-253
- **Purpose**: Users can inquire about bank transfers, checks, cryptocurrency

#### Financial Report Request
- **Email**: info@shieldintl.org
- **Subject**: Financial Report Request
- **Location**: Line 405
- **Purpose**: Users can request transparency documentation

#### Impact Reports Request
- **Email**: info@shieldintl.org
- **Subject**: Impact Reports Request
- **Location**: Line 286
- **Purpose**: Users can request program impact reports

#### Volunteer Inquiry
- **Email**: info@shieldintl.org
- **Subject**: Volunteer Inquiry
- **Location**: Line 479
- **Purpose**: Users can inquire about volunteer opportunities

### Email Template Structure

All email links follow this pattern:
```typescript
href="mailto:info@shieldintl.org?subject=SUBJECT_HERE&body=EMAIL_BODY_HERE"
```

The email body uses URL encoding:
- `%0D%0A` = Line break
- `%20` = Space
- Example body: `Hello SHIELD Team,%0D%0A%0D%0AI would like to...`

## Testing

### PayPal Testing
1. Replace all placeholder IDs with actual PayPal button IDs
2. Test each donation amount in PayPal's sandbox environment first
3. Verify that donations redirect correctly to PayPal
4. Test both one-time and recurring donation flows

### Email Testing
1. Click each email button to ensure it opens the default email client
2. Verify that the email address, subject, and body are correctly populated
3. Test on different browsers and operating systems
4. Ensure email links work on mobile devices

## Security Considerations

- All PayPal links open in new tabs (`target="_blank"`)
- Security attributes are included (`rel="noopener noreferrer"`)
- Email addresses are not exposed in a way that enables spam harvesting
- No sensitive information is passed through URL parameters

## Maintenance

### Regular Updates Needed
1. **PayPal Button IDs**: May need updating if PayPal buttons are recreated
2. **Email Address**: Update `info@shieldintl.org` if the contact email changes
3. **Email Templates**: Update pre-filled email content as needed

### File Locations
- Main donation page: `src/pages/donate.tsx`
- CSS styles: `src/pages/Donate.css`

## Troubleshooting

### Common Issues
1. **PayPal buttons not working**: Verify button IDs are correct and active
2. **Email not opening**: Check that the user has a default email client configured
3. **Broken links**: Ensure all URLs are properly formatted and encoded

### Support
For technical issues with this implementation, contact the development team.
For PayPal-specific issues, consult PayPal's developer documentation or support.

## Development Notes

- The donation page is built with React and TypeScript
- All donation amounts are in USD
- The page is responsive and mobile-friendly
- Email functionality uses standard `mailto:` protocol
- PayPal integration uses their hosted button solution for security

---

**Last Updated**: [Current Date]
**Version**: 1.0
**Maintainer**: SHIELD Development Team