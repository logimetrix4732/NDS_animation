// Cache configuration - sirf images aur videos ka cache
const CACHE_VERSION = "v2.0";
const IMAGE_CACHE = `image-cache-${CACHE_VERSION}`;
const VIDEO_CACHE = `video-cache-${CACHE_VERSION}`;

// Cache limits - sirf images aur videos ke liye
const MAX_IMAGE_ENTRIES = 100;
const MAX_VIDEO_ENTRIES = 20;

// Sirf offline page pre-cache karenge
const OFFLINE_ASSETS = ["/offline.html"];

// Critical images to pre-cache
const CRITICAL_IMAGES = [
  "/assets/img/nddblogo.png",
  "/assets/img/banner.png",
  "/assets/img/banner1.png",
  "/assets/img/banner2.png",
  "/assets/img/banner3.png",
  "/assets/img/banner4.png",
  "/assets/img/banner5.png",
];

// Install event - sirf critical images aur offline page pre-cache karenge
self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    Promise.all([
      // Cache offline page
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.addAll(OFFLINE_ASSETS);
      }),
      // Cache critical images
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.addAll(CRITICAL_IMAGES);
      }),
    ]).catch((err) => {})
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheName.includes(CACHE_VERSION)) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control of all clients
      clients.claim(),
    ])
  );
});

// Helper function to trim cache size
async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();

  if (keys.length > maxEntries) {
    // Delete oldest entries (first in array)
    const keysToDelete = keys.slice(0, keys.length - maxEntries);
    await Promise.all(keysToDelete.map((key) => cache.delete(key)));
  }
}

// Helper function to get cache name based on request type - sirf images aur videos
function getCacheName(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Check if it's an image
  if (
    request.destination === "image" ||
    /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i.test(pathname)
  ) {
    return IMAGE_CACHE;
  }

  // Check if it's a video
  if (
    request.destination === "video" ||
    /\.(mp4|webm|ogg|avi|mov)$/i.test(pathname)
  ) {
    return VIDEO_CACHE;
  }

  // Baki sab requests ko cache nahi karenge
  return null;
}

// Fetch event - sirf images aur videos ka cache karenge
self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith("http")) {
    return;
  }

  // Skip admin routes (optional - for development)
  if (url.pathname.startsWith("/admin")) {
    return;
  }

  const cacheName = getCacheName(request);

  // Agar cache name null hai to sirf network se fetch karenge
  if (!cacheName) {
    event.respondWith(fetch(request));
    return;
  }

  event.respondWith(
    caches.open(cacheName).then(async (cache) => {
      // Try cache first
      const cachedResponse = await cache.match(request);

      if (cachedResponse) {
        return cachedResponse;
      }

      // If not in cache, fetch from network
      try {
        const networkResponse = await fetch(request);

        // Only cache successful responses
        if (networkResponse && networkResponse.status === 200) {
          // Clone the response before caching
          const responseToCache = networkResponse.clone();

          // Cache the response
          await cache.put(request, responseToCache);

          // Trim cache if it exceeds limits
          const maxEntries =
            cacheName === IMAGE_CACHE ? MAX_IMAGE_ENTRIES : MAX_VIDEO_ENTRIES;

          await trimCache(cacheName, maxEntries);
        }

        return networkResponse;
      } catch (error) {
        // Return fallback for images
        if (cacheName === IMAGE_CACHE) {
          const fallbackResponse = await cache.match(
            "/assets/img/nddblogo.png"
          );
          if (fallbackResponse) {
            return fallbackResponse;
          }
        }

        // Return offline page for HTML requests
        if (request.destination === "document") {
          const offlineResponse = await cache.match("/offline.html");
          if (offlineResponse) {
            return offlineResponse;
          }
        }

        throw error;
      }
    })
  );
});

// Background sync for cache management
self.addEventListener("sync", (event) => {
  if (event.tag === "cache-cleanup") {
    event.waitUntil(cleanupOldCaches());
  }
});

// Cleanup function for old caches
async function cleanupOldCaches() {
  const cacheNames = await caches.keys();
  const currentCaches = [IMAGE_CACHE, VIDEO_CACHE];

  const oldCaches = cacheNames.filter((name) => !currentCaches.includes(name));

  await Promise.all(oldCaches.map((name) => caches.delete(name)));
}

// Message handling for cache management
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

  if (event.data && event.data.type === "CLEAR_CACHE") {
    event.waitUntil(
      caches
        .keys()
        .then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => caches.delete(cacheName))
          );
        })
        .then(() => {
          event.ports[0].postMessage({ success: true });
        })
    );
  }
});
