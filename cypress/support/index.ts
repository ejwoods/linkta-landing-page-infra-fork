Cypress.on('uncaught:exception', (err, runnable) => {
  // Handle Next.js and React Hydration Errors when using Cypress
  if (
    /hydrat/i.test(err.message) ||
    /Minified React error #329/.test(err.message) ||
    /Minified React error #418/.test(err.message) ||
    /Minified React error #423/.test(err.message)
  ) {
    return false;
  }
});
