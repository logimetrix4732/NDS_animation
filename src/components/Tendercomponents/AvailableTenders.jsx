import React, { useState, useMemo, useEffect } from "react";
import { Box, Typography, Container, Grid, CircularProgress, Alert } from "@mui/material";
import { motion } from "framer-motion";
import TenderFilters from "./TenderFilters";
import TenderCard from "./TenderCard";
import LoginModal from "./LoginModal";
import { getFetch } from "../../Api/Api";

const mockTenders = [
  {
    id: "1",
    title: "Digital Infrastructure Modernization Project",
    status: "Active",
    description:
      "Comprehensive upgrade of city digital infrastructure including network modernization, cloud migration, and cybersecurity implementation.",
    startDate: "2024-02-01",
    endDate: "2024-03-15",
    lastDate: "2024-03-10",
    participants: 24,
    category: "Technology",
    estimatedValue: "$2,500,000",
    location: "Reference ID",
    documentsCount: 8,
  },
  {
    id: "2",
    title: "City Hall Renovation and Modernization",
    status: "Active",
    description:
      "Complete renovation of the main city hall building including structural improvements and modern facilities.",
    startDate: "2024-04-22",
    endDate: "2024-05-16",
    lastDate: "2024-05-10",
    participants: 18,
    category: "Construction",
    estimatedValue: "$850,000",
    location: "Reference ID",
    documentsCount: 5,
  },
];

const AvailableTenders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [viewMode, setViewMode] = useState("list");
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [openIndex, setOpenIndex] = useState(0);

  // Fetch tenders from API
  useEffect(() => {
    const fetchTenders = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getFetch(
          `${import.meta.env.VITE_API_BASE_URL}/tenders`
        );

        console.log("AvailableTenders API Response:", response);

        if (response && response.status === 200) {
          console.log("Raw API Response Data:", response.data.data);

          // Map the API response to match the expected format
          const mappedTenders = response.data.data.map((tender) => {
            console.log("Processing tender:", tender);

            // Try different possible field names for tender file
            const tenderFile = tender.tenderFile || tender.tender_file || tender.file || tender.document || tender.pdfFile || null;
            console.log("Found tenderFile:", tenderFile);

            // Map priority from API or set default
            const priority = tender.priority || tender.priorityLevel || "Medium";

            // Map category from API or set default
            const category = tender.category || tender.tenderCategory || "Infrastructure";

            // Map status from API or set default
            const status = tender.status || "Active";

            return {
              id: tender.id || tender.referenceNo || `TND-${Date.now()}`,
              title: tender.tenderTitle || "Untitled Tender",
              status: status,
              description: tender.description || "No description available",
              startDate: tender.startDate || new Date().toISOString().split('T')[0],
              endDate: tender.lastDateSubmission || new Date().toISOString().split('T')[0],
              lastDate: tender.lastDateSubmission || new Date().toISOString().split('T')[0],
              participants: Math.floor(Math.random() * 50) + 1, // Random participants for now
              category: category,
              estimatedValue: tender.estimatedValues || "$0",
              location: tender.location || "Not specified",
              documentsCount: tenderFile ? 1 : 0, // Set documents count based on file availability
              priority: priority,
              tenderCard: tender.tenderCard || "Active",
              tenderFile: tenderFile,
              image: tender.image || "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400",
            };
          }).filter(tender => tender.tenderCard === "Active"); // Only show Active tenders

          console.log("Mapped Tenders:", mappedTenders);
          setTenders(mappedTenders);
        } else {
          console.error("Failed to fetch tenders:", response);
          setError("Failed to fetch tenders. Please try again.");
          setTenders([]);
        }
      } catch (error) {
        console.error("Error fetching tenders:", error);
        setError("Error fetching tenders. Please try again.");
        setTenders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTenders();
  }, []);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const filteredTenders = useMemo(() => {
    return tenders.filter((tender) => {
      const matchesSearch =
        tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tender.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !category || tender.category === category;
      const matchesStatus = !status || tender.status === status;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [tenders, searchTerm, category, status]);

  const handleViewDetails = (tender) => {
    if (!isLoggedIn) {
      setLoginModalOpen(true);
    }
  };

  const handleDownloadDocuments = (tender) => {
    if (!isLoggedIn) {
      setLoginModalOpen(true);
    }
  };

  const handleLogin = (email, password) => {
    setIsLoggedIn(true);
  };

  return (
    <Box sx={{ py: 8, bgcolor: "#fafafa", minHeight: "100vh" }}>
      <Container maxWidth="xl">
        <TenderFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
          status={status}
          setStatus={setStatus}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {!loading && !error && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {filteredTenders.map((tender, index) => (
              <Box key={tender.id}>
                <TenderCard
                  tender={tender}
                  onViewDetails={handleViewDetails}
                  onDownloadDocuments={handleDownloadDocuments}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              </Box>
            ))}
          </Box>
        )}

        {!loading && !error && filteredTenders.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                No tenders found
              </Typography>
            </Box>
          </motion.div>
        )}
      </Container>

      <LoginModal
        open={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </Box>
  );
};

export default AvailableTenders;
