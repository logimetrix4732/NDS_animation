// Service Worker Registration and Management
class ServiceWorkerManager {
  constructor() {
    this.registration = null;
    this.isSupported = "serviceWorker" in navigator;
  }

  // Register service worker
  async register() {
    if (!this.isSupported) {
      return false;
    }

    try {
      this.registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });

      // Handle updates
      this.registration.addEventListener("updatefound", () => {
        const newWorker = this.registration.installing;

        newWorker.addEventListener("statechange", () => {
          if (
            newWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            // New content is available, show update notification
            this.showUpdateNotification();
          }
        });
      });

      return true;
    } catch (error) {
      console.error("Service Worker registration failed:", error);
      return false;
    }
  }

  // Show update notification
  showUpdateNotification() {
    if (
      confirm(
        "Website ka naya version available hai! Refresh karna chahte hain?"
      )
    ) {
      this.updateServiceWorker();
    }
  }

  // Update service worker
  async updateServiceWorker() {
    if (this.registration && this.registration.waiting) {
      // Tell the waiting service worker to skip waiting
      this.registration.waiting.postMessage({ type: "SKIP_WAITING" });

      // Reload the page
      window.location.reload();
    }
  }

  // Clear all caches
  async clearCache() {
    if (!this.isSupported) {
      return false;
    }

    try {
      if (this.registration && this.registration.active) {
        const messageChannel = new MessageChannel();

        return new Promise((resolve) => {
          messageChannel.port1.onmessage = (event) => {
            if (event.data.success) {
              resolve(true);
            } else {
              resolve(false);
            }
          };

          this.registration.active.postMessage({ type: "CLEAR_CACHE" }, [
            messageChannel.port2,
          ]);
        });
      }
      return false;
    } catch (error) {
      console.error("Error clearing cache:", error);
      return false;
    }
  }

  // Get cache status
  async getCacheStatus() {
    if (!this.isSupported) {
      return { supported: false };
    }

    try {
      const cacheNames = await caches.keys();
      const cacheDetails = {};

      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const keys = await cache.keys();
        cacheDetails[cacheName] = {
          count: keys.length,
          size: "Unknown", // Size calculation would require more complex logic
        };
      }

      return {
        supported: true,
        registered: !!this.registration,
        caches: cacheDetails,
        totalCaches: cacheNames.length,
      };
    } catch (error) {
      console.error("Error getting cache status:", error);
      return { supported: true, error: error.message };
    }
  }

  // Preload critical resources
  async preloadCriticalResources() {
    if (!this.isSupported) {
      return false;
    }

    try {
      const criticalImages = [
        "/assets/img/nddblogo.png",
        "/assets/img/banner.png",
        "/assets/img/banner1.png",
        "/assets/img/banner2.png",
        "/assets/img/banner3.png",
        "/assets/img/banner4.png",
        "/assets/img/banner5.png",
      ];

      const imageCache = await caches.open("image-cache-v2.0");

      // Preload critical images
      await Promise.all(
        criticalImages.map(async (imageUrl) => {
          try {
            const response = await fetch(imageUrl);
            if (response.ok) {
              await imageCache.put(imageUrl, response);
            }
          } catch (error) {}
        })
      );

      return true;
    } catch (error) {
      console.error("Error preloading resources:", error);
      return false;
    }
  }
}

// Create global instance
const serviceWorkerManager = new ServiceWorkerManager();

// Auto-register on page load
if (typeof window !== "undefined") {
  window.addEventListener("load", async () => {
    await serviceWorkerManager.register();

    // Preload critical resources after registration
    setTimeout(() => {
      serviceWorkerManager.preloadCriticalResources();
    }, 2000);
  });
}

export default serviceWorkerManager;
