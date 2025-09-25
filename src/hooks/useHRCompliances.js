import { useState, useEffect } from "react";

const useHRCompliances = () => {
  const [hasHRCompliances, setHasHRCompliances] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkHRCompliances = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/getPublication?publicationType=HR Compliances`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          // Check if data exists and has content
          setHasHRCompliances(data?.data && data.data.length > 0);
        } else {
          setHasHRCompliances(false);
        }
      } catch (error) {
        console.error("Error checking HR Compliances:", error);
        setHasHRCompliances(false);
      } finally {
        setLoading(false);
      }
    };

    checkHRCompliances();
  }, []);

  return { hasHRCompliances, loading };
};

export default useHRCompliances;
