import React, { useState, useMemo } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import TenderFilters from "./TenderFilters";
import TenderCard from "./TenderCard";
import LoginModal from "./LoginModal";

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

  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const filteredTenders = useMemo(() => {
    return mockTenders.filter((tender) => {
      const matchesSearch =
        tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tender.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !category || tender.category === category;
      const matchesStatus = !status || tender.status === status;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, category, status]);

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

        {filteredTenders.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                No tenders
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
