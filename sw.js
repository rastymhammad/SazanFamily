const CACHE_NAME = 'sazan-tree-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/sazan-logo.png',
  '/rudawregular2.ttf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});