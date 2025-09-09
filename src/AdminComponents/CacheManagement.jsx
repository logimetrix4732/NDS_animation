import React, { useState, useEffect } from "react";
import serviceWorkerManager from "../utils/serviceWorker.js";
import cachePreloader from "../utils/cachePreloader.js";

const CacheManagement = () => {
  const [cacheStatus, setCacheStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Load cache status on component mount
  useEffect(() => {
    loadCacheStatus();
  }, []);

  const loadCacheStatus = async () => {
    setIsLoading(true);
    try {
      const status = await serviceWorkerManager.getCacheStatus();
      setCacheStatus(status);
    } catch (error) {
      console.error("Error loading cache status:", error);
      setMessage("Cache status load karne mein error aaya");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearCache = async () => {
    if (
      !window.confirm(
        "Kya aap sure hain ki saara cache clear karna chahte hain?"
      )
    ) {
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const success = await serviceWorkerManager.clearCache();
      if (success) {
        setMessage("Cache successfully clear ho gaya!");
        await loadCacheStatus(); // Reload status
      } else {
        setMessage("Cache clear karne mein error aaya");
      }
    } catch (error) {
      console.error("Error clearing cache:", error);
      setMessage("Cache clear karne mein error aaya");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePreloadResources = async () => {
    setIsLoading(true);
    setMessage("");

    try {
      // Use cache preloader for better preloading
      await cachePreloader.preloadForCurrentPage();
      setMessage("Critical resources successfully preload ho gaye!");
      await loadCacheStatus(); // Reload status
    } catch (error) {
      console.error("Error preloading resources:", error);
      setMessage("Resources preload karne mein error aaya");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePreloadAllPages = async () => {
    setIsLoading(true);
    setMessage("");

    try {
      // Preload all page resources
      await cachePreloader.preloadCriticalImages();
      await cachePreloader.preloadPageImages("about");
      await cachePreloader.preloadPageImages("career");
      await cachePreloader.preloadPageImages("gallery");
      await cachePreloader.preloadPageImages("tender");
      await cachePreloader.preloadVideos();

      setMessage("Saare page resources successfully preload ho gaye!");
      await loadCacheStatus(); // Reload status
    } catch (error) {
      console.error("Error preloading all resources:", error);
      setMessage("Resources preload karne mein error aaya");
    } finally {
      setIsLoading(false);
    }
  };

  const formatCacheInfo = (cacheInfo) => {
    if (!cacheInfo) return "Loading...";

    if (!cacheInfo.supported) {
      return "Service Worker is browser mein supported nahi hai";
    }

    if (cacheInfo.error) {
      return `Error: ${cacheInfo.error}`;
    }

    return `Total Caches: ${cacheInfo.totalCaches || 0}`;
  };

  return (
    <div
      className="cache-management-container"
      style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
    >
      <h2
        style={{
          color: "#2c3e50",
          marginBottom: "20px",
          borderBottom: "2px solid #3498db",
          paddingBottom: "10px",
        }}
      >
        Cache Management
      </h2>

      {/* Cache Status Card */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          border: "1px solid #dee2e6",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#495057", marginBottom: "15px" }}>Cache Status</h3>

        {isLoading ? (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <div
              style={{
                display: "inline-block",
                width: "20px",
                height: "20px",
                border: "2px solid #3498db",
                borderTop: "2px solid transparent",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            ></div>
            <p style={{ marginTop: "10px", color: "#6c757d" }}>Loading...</p>
          </div>
        ) : (
          <div>
            <p>
              <strong>Status:</strong> {formatCacheInfo(cacheStatus)}
            </p>
            <p>
              <strong>Service Worker:</strong>{" "}
              {cacheStatus?.registered ? "Registered" : "Not Registered"}
            </p>

            {cacheStatus?.caches && (
              <div style={{ marginTop: "15px" }}>
                <h4 style={{ color: "#495057", marginBottom: "10px" }}>
                  Cache Details:
                </h4>
                <div
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #dee2e6",
                    borderRadius: "4px",
                    padding: "10px",
                  }}
                >
                  {Object.entries(cacheStatus.caches).map(
                    ([cacheName, info]) => (
                      <div
                        key={cacheName}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "5px 0",
                          borderBottom: "1px solid #f1f3f4",
                        }}
                      >
                        <span style={{ fontWeight: "500" }}>{cacheName}:</span>
                        <span style={{ color: "#6c757d" }}>
                          {info.count} items
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={loadCacheStatus}
          disabled={isLoading}
          style={{
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: isLoading ? "not-allowed" : "pointer",
            opacity: isLoading ? 0.6 : 1,
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Refresh Status
        </button>

        <button
          onClick={handlePreloadResources}
          disabled={isLoading}
          style={{
            backgroundColor: "#27ae60",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: isLoading ? "not-allowed" : "pointer",
            opacity: isLoading ? 0.6 : 1,
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Preload Current Page
        </button>

        <button
          onClick={handlePreloadAllPages}
          disabled={isLoading}
          style={{
            backgroundColor: "#8e44ad",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: isLoading ? "not-allowed" : "pointer",
            opacity: isLoading ? 0.6 : 1,
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Preload All Pages
        </button>

        <button
          onClick={handleClearCache}
          disabled={isLoading}
          style={{
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: isLoading ? "not-allowed" : "pointer",
            opacity: isLoading ? 0.6 : 1,
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Clear All Cache
        </button>
      </div>

      {/* Message Display */}
      {message && (
        <div
          style={{
            backgroundColor: message.includes("error") ? "#f8d7da" : "#d4edda",
            color: message.includes("error") ? "#721c24" : "#155724",
            border: `1px solid ${
              message.includes("error") ? "#f5c6cb" : "#c3e6cb"
            }`,
            borderRadius: "5px",
            padding: "12px",
            marginBottom: "20px",
          }}
        >
          {message}
        </div>
      )}

      {/* Cache Information */}
      <div
        style={{
          backgroundColor: "#e9ecef",
          border: "1px solid #ced4da",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <h3 style={{ color: "#495057", marginBottom: "15px" }}>
          Cache Information
        </h3>
        <div style={{ fontSize: "14px", lineHeight: "1.6", color: "#6c757d" }}>
          <p>
            <strong>Static Cache:</strong> CSS, JS, fonts aur other static files
          </p>
          <p>
            <strong>Image Cache:</strong> All images (max 100 entries)
          </p>
          <p>
            <strong>Video Cache:</strong> All videos (max 20 entries)
          </p>
          <p>
            <strong>Dynamic Cache:</strong> Other dynamic content (max 50
            entries)
          </p>
          <br />
          <p>
            <strong>Note:</strong> Cache automatically manage hota hai. Old
            entries remove ho jate hain jab limit exceed ho jaye.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CacheManagement;
