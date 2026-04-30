const CACHE_NAME = 'manribstech-v1';
const assets = ['./ManribsTech%20Store.html', './logo.png'];

// Install the service worker and cache files
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(assets)));
});

// Serve files from cache when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});