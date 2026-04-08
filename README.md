# Stripe Invoice Portal Helper

Small JavaScript helpers for working with Stripe Billing Portal invoice links in the browser, for example to batch-download OpenAI invoices in ChatGPT.

## What it does

- Finds `invoice.stripe.com` invoice links on the current page
- Deduplicates them
- Opens all invoice links in new tabs
- Can be used directly in Chrome DevTools console

## Usage

Paste the script from `snippets/paste-into-console.js` into the browser console on a page that contains Stripe invoice links.

## Notes

- Some attempts to fetch PDF URLs directly may fail due to CORS restrictions.
- In that case, this tool falls back to opening the invoice portal links directly.

## Disclaimer

This project is intended for use on pages you have permission to access.

## Example

```js
const invoiceUrls = [...new Set(
  [...document.querySelectorAll('a[href*="invoice.stripe.com/i/"]')]
    .map(a => a.href)
)];

invoiceUrls.forEach((url, i) => {
  setTimeout(() => window.open(url, '_blank'), i * 400);
});
