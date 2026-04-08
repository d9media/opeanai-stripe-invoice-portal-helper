
(() => {
  const invoiceUrls = [...new Set(
    [...document.querySelectorAll('a[href*="invoice.stripe.com/i/"]')]
      .map(a => a.href)
  )];

  console.log(`Found ${invoiceUrls.length} invoice links`);
  console.log(invoiceUrls);

  window.stripeInvoiceUrls = invoiceUrls;

  invoiceUrls.forEach((url, i) => {
    setTimeout(() => {
      window.open(url, '_blank');
    }, i * 400);
  });
})();
