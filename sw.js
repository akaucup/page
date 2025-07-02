// sw.js
const CACHE_NAME = 'offline-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Kembalikan dari cache jika ada, jika tidak ambil dari jaringan
      return response || fetch(event.request);
    }).catch(() => {
      // Optional: fallback page jika tidak ada koneksi dan tidak ada cache
      return caches.match('/index.html');
    })
  );
});
