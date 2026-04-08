/**
 * Icon Loader Script
 * Manages site-wide icons from a central configuration.
 */
(function() {
  // Path adjustment for files inside the /blog folder
  const isBlogPage = window.location.pathname.includes('/blog/');
  const prefix = isBlogPage ? '../' : '';

  const faviconPath = prefix + 'assets/aramcci.ico';

  // Create favicon link
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = faviconPath;

  // Create apple touch icon link
  const appleLink = document.createElement('link');
  appleLink.rel = 'apple-touch-icon';
  appleLink.href = faviconPath;

  // Append to head
  document.head.appendChild(link);
  document.head.appendChild(appleLink);
})();
