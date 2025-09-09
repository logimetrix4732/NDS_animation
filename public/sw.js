// Cache configuration
const CACHE_VERSION = "v2.0";
const STATIC_CACHE = `static-cache-${CACHE_VERSION}`;
const IMAGE_CACHE = `image-cache-${CACHE_VERSION}`;
const VIDEO_CACHE = `video-cache-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-cache-${CACHE_VERSION}`;

// Cache limits
const MAX_IMAGE_ENTRIES = 100;
const MAX_VIDEO_ENTRIES = 20;
const MAX_DYNAMIC_ENTRIES = 50;

// Static assets to pre-cache
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/offline.html",
  "/assets/css/bootstrap.min.css",
  "/assets/css/fontawesome.min.css",
  "/assets/css/style.css",
  "/assets/css/swiper-bundle.min.css",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/js/jquery.min.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/js/wow.min.js",
  "/assets/js/main.js",
];

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

// Install event - pre-cache critical assets
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  self.skipWaiting();

  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE).then((cache) => {
        console.log("Caching static assets...");
        return cache.addAll(STATIC_ASSETS);
      }),
      // Cache critical images
      caches.open(IMAGE_CACHE).then((cache) => {
        console.log("Caching critical images...");
        return cache.addAll(CRITICAL_IMAGES);
      }),
    ]).catch((err) => {
      console.log("Pre-caching failed:", err);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");

  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheName.includes(CACHE_VERSION)) {
              console.log("Deleting old cache:", cacheName);
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
    console.log(`Trimmed ${cacheName}: removed ${keysToDelete.length} entries`);
  }
}

// Helper function to get cache name based on request type
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

  // Check if it's a static asset
  if (
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/static/") ||
    /\.(css|js|woff|woff2|ttf|eot)$/i.test(pathname)
  ) {
    return STATIC_CACHE;
  }

  return DYNAMIC_CACHE;
}

// Fetch event - implement caching strategy
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

  event.respondWith(
    caches.open(cacheName).then(async (cache) => {
      // Try cache first
      const cachedResponse = await cache.match(request);

      if (cachedResponse) {
        console.log("Serving from cache:", request.url);
        return cachedResponse;
      }

      // If not in cache, fetch from network
      try {
        console.log("Fetching from network:", request.url);
        const networkResponse = await fetch(request);

        // Only cache successful responses
        if (networkResponse && networkResponse.status === 200) {
          // Clone the response before caching
          const responseToCache = networkResponse.clone();

          // Cache the response
          await cache.put(request, responseToCache);

          // Trim cache if it exceeds limits
          const maxEntries =
            cacheName === IMAGE_CACHE
              ? MAX_IMAGE_ENTRIES
              : cacheName === VIDEO_CACHE
              ? MAX_VIDEO_ENTRIES
              : cacheName === DYNAMIC_CACHE
              ? MAX_DYNAMIC_ENTRIES
              : 100;

          await trimCache(cacheName, maxEntries);
        }

        return networkResponse;
      } catch (error) {
        console.log("Network fetch failed:", request.url, error);

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
  const currentCaches = [STATIC_CACHE, IMAGE_CACHE, VIDEO_CACHE, DYNAMIC_CACHE];

  const oldCaches = cacheNames.filter((name) => !currentCaches.includes(name));

  await Promise.all(oldCaches.map((name) => caches.delete(name)));

  console.log("Cleaned up old caches:", oldCaches);
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
