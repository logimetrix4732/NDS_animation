import React, { useState, useMemo } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import TenderFilters from "./TenderFilters";
import TenderCard from "./TenderCard";
import LoginModal from "./LoginModal";

const mockTenders = [];

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
