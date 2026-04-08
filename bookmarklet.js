javascript:(() => {
  const invoiceUrls = [...new Set(
    [...document.querySelectorAll('a[href*="invoice.stripe.com/i/"]')]
      .map(a => a.href)
  )];

  invoiceUrls.forEach((url, i) => {
    setTimeout(() => window.open(url, '_blank'), i * 400);
  });
})();
