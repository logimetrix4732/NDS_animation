// Cache Preloader Utility
// Ye utility images aur videos ko preload karega for better performance

class CachePreloader {
  constructor() {
    this.preloadQueue = [];
    this.isPreloading = false;
    this.maxConcurrent = 3; // Maximum concurrent preloads
    this.currentPreloads = 0;
  }

  // Add resources to preload queue
  addToQueue(resources) {
    if (Array.isArray(resources)) {
      this.preloadQueue.push(...resources);
    } else {
      this.preloadQueue.push(resources);
    }
  }

  // Preload critical images
  async preloadCriticalImages() {
    const criticalImages = [
      "/assets/img/nddblogo.png",
      "/assets/img/banner.png",
      "/assets/img/banner1.png",
      "/assets/img/banner2.png",
      "/assets/img/banner3.png",
      "/assets/img/banner4.png",
      "/assets/img/banner5.png",
      "/assets/img/dashboard.jpg",
      "/assets/img/dashboard1.jpg",
      "/assets/img/dashboard2.jpg",
      "/assets/img/dashboard3.jpg",
      "/assets/img/dashboard4.jpeg",
    ];

    await this.preloadResources(criticalImages);
  }

  // Preload page-specific images
  async preloadPageImages(pageName) {
    const pageImages = {
      about: [
        "/assets/img/aboutImg.jpg",
        "/assets/img/aboutImg1.jpg",
        "/assets/img/aboutImg2.jpg",
        "/assets/img/aboutImg3.jpg",
      ],
      career: [
        "/assets/img/careerintrobanner.png",
        "/assets/img/CarrerImg/career1.jpg",
        "/assets/img/CarrerImg/career2.jpg",
      ],
      gallery: [
        "/assets/img/HomeImgs/home1.jpg",
        "/assets/img/HomeImgs/home2.jpg",
        "/assets/img/HomeImgs/home3.jpg",
      ],
      tender: ["/assets/img/icon/tender-icon.png"],
    };

    const images = pageImages[pageName] || [];
    if (images.length > 0) {
      await this.preloadResources(images);
    }
  }

  // Preload videos
  async preloadVideos() {
    const videos = [
      "/assets/img/Videos/video1.mp4",
      "/assets/img/Videos/video2.mp4",
      "/assets/img/Videos/video3.mp4",
    ];

    await this.preloadResources(videos);
  }

  // Main preload function
  async preloadResources(resources) {
    if (!Array.isArray(resources)) {
      resources = [resources];
    }

    // Add to queue
    this.addToQueue(resources);

    // Start preloading if not already running
    if (!this.isPreloading) {
      this.startPreloading();
    }
  }

  // Start the preloading process
  async startPreloading() {
    if (this.isPreloading) return;

    this.isPreloading = true;

    while (
      this.preloadQueue.length > 0 &&
      this.currentPreloads < this.maxConcurrent
    ) {
      const resource = this.preloadQueue.shift();
      this.preloadSingleResource(resource);
    }

    // Wait for all preloads to complete
    while (this.currentPreloads > 0) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    this.isPreloading = false;
  }

  // Preload single resource - sirf images aur videos
  async preloadSingleResource(resource) {
    this.currentPreloads++;

    try {
      // Check if it's an image
      if (this.isImage(resource)) {
        await this.preloadImage(resource);
      }
      // Check if it's a video
      else if (this.isVideo(resource)) {
        await this.preloadVideo(resource);
      }
      // Static assets ko skip karenge
    } catch (error) {
    } finally {
      this.currentPreloads--;

      // Continue with next resource if queue has items
      if (
        this.preloadQueue.length > 0 &&
        this.currentPreloads < this.maxConcurrent
      ) {
        const nextResource = this.preloadQueue.shift();
        this.preloadSingleResource(nextResource);
      }
    }
  }

  // Preload image
  async preloadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve();
      };
      img.onerror = () => {
        reject(new Error(`Failed to load image: ${src}`));
      };
      img.src = src;
    });
  }

  // Preload video
  async preloadVideo(src) {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => {
        resolve();
      };
      video.onerror = () => {
        reject(new Error(`Failed to load video: ${src}`));
      };
      video.src = src;
    });
  }

  // Static assets ko preload nahi karenge ab
  async preloadStaticAsset(src) {
    // Static assets preloading disabled - sirf images aur videos
    return Promise.resolve();
  }

  // Helper functions to check resource types
  isImage(src) {
    return /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i.test(src);
  }

  isVideo(src) {
    return /\.(mp4|webm|ogg|avi|mov)$/i.test(src);
  }

  isStaticAsset(src) {
    return /\.(css|js|woff|woff2|ttf|eot)$/i.test(src);
  }

  // Get preload status
  getStatus() {
    return {
      isPreloading: this.isPreloading,
      queueLength: this.preloadQueue.length,
      currentPreloads: this.currentPreloads,
      maxConcurrent: this.maxConcurrent,
    };
  }

  // Clear preload queue
  clearQueue() {
    this.preloadQueue = [];
  }

  // Preload based on current page
  async preloadForCurrentPage() {
    const currentPath = window.location.pathname;

    // Preload critical images first
    await this.preloadCriticalImages();

    // Preload page-specific resources
    if (currentPath.includes("/about")) {
      await this.preloadPageImages("about");
    } else if (currentPath.includes("/carrer")) {
      await this.preloadPageImages("career");
    } else if (currentPath.includes("/gallery")) {
      await this.preloadPageImages("gallery");
    } else if (currentPath.includes("/tender")) {
      await this.preloadPageImages("tender");
    }

    // Preload videos if on home page
    if (currentPath === "/") {
      await this.preloadVideos();
    }
  }
}

// Create global instance
const cachePreloader = new CachePreloader();

// Auto-preload on page load
if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    // Start preloading after a short delay
    setTimeout(() => {
      cachePreloader.preloadForCurrentPage();
    }, 2000);
  });

  // Preload on route change (for SPA)
  let lastPath = window.location.pathname;
  const observer = new MutationObserver(() => {
    if (window.location.pathname !== lastPath) {
      lastPath = window.location.pathname;
      setTimeout(() => {
        cachePreloader.preloadForCurrentPage();
      }, 1000);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

export default cachePreloader;
