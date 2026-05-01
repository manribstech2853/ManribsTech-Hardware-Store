const CACHE_NAME = 'manribstech-v2';
const ASSETS = [
  './',
  './index.html',
  './logo.png',
  './manifest.json',
  // Add other CSS or JS files here
];

// Install: Cache all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch: Serve from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
