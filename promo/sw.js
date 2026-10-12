// Minimal service worker for the 103 Ways to Die promo page.
// Makes the page installable as a PWA (install opens the game itself).
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  // Passthrough: let all requests go to the network normally.
});
