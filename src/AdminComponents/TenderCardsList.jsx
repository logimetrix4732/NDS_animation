import React from "react";
import {
  Stack,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Chip,
  Button,
  Fade,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from "@mui/material";
import {
  LocationOn as LocationIcon,
  AttachMoney as AttachMoneyIcon,
  Description as DescriptionIcon,
  ArrowUpward,
  ArrowDownward,
  Business as BusinessIcon,
  People as PeopleIcon,
  Schedule as ScheduleIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";

const TenderCardsList = ({
  filteredTenders,
  onViewDocument,
  onEditTender,
  onDeleteTender,
  onDownloadTender,
}) => {
  const [selectedTender, setSelectedTender] = React.useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [deleteLoading, setDeleteLoading] = React.useState(false);

  const confirmDelete = async () => {
    if (selectedTender && onDeleteTender) {
      setDeleteLoading(true);
      try {
        await onDeleteTender(selectedTender.id);
        setDeleteDialogOpen(false);
        setSelectedTender(null);
      } catch (error) {
        console.error("Error deleting tender:", error);
      } finally {
        setDeleteLoading(false);
      }
    }
  };

  return (
    <Stack spacing={3}>
      {filteredTenders.map((tender, index) => (
        <Fade in timeout={600 + index * 200} key={tender.id}>
          <Card
            sx={{
              width: "100%",
              borderRadius: 3,
              background: (t) =>
                t.palette.mode === "dark"
                  ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                  : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              border: (t) =>
                t.palette.mode === "dark"
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(0,0,0,0.08)",
              boxShadow: (t) =>
                t.palette.mode === "dark"
                  ? "0 4px 20px rgba(0, 0, 0, 0.3)"
                  : "0 4px 20px rgba(0, 0, 0, 0.06)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: (t) =>
                  t.palette.mode === "dark"
                    ? "0 8px 30px rgba(0, 0, 0, 0.4)"
                    : "0 8px 30px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            {/* Card Header with Status Badge */}
            <Box
              sx={{
                position: "relative",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                p: 3,
                color: "white",
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      lineHeight: 1.3,
                      color: "white",
                    }}
                  >
                    {tender.title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      flexWrap: "wrap",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <LocationIcon sx={{ fontSize: 16 }} />
                      <Typography
                        variant="body2"
                        sx={{ opacity: 0.9, color: "white" }}
                      >
                        {tender.location}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ opacity: 0.7, color: "white" }}
                    >
                      ID: {tender.id}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <AttachMoneyIcon sx={{ fontSize: 18 }} />
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "white" }}
                      >
                        ₹{tender.estimatedValue}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "flex-start", md: "flex-end" },
                      gap: 2,
                    }}
                  >
                    <Chip
                      label={tender.status}
                      sx={{
                        background: "rgba(255,255,255,0.2)",
                        color: "white",
                        fontWeight: 600,
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    />
                    <Chip
                      label={
                        tender.tenderCard === "Active"
                          ? "Card Active"
                          : "Card Inactive"
                      }
                      sx={{
                        background:
                          tender.tenderCard === "Active"
                            ? "rgba(34, 197, 94, 0.2)"
                            : "rgba(239, 68, 68, 0.2)",
                        color: "white",
                        fontWeight: 600,
                        border:
                          tender.tenderCard === "Active"
                            ? "1px solid rgba(34, 197, 94, 0.3)"
                            : "1px solid rgba(239, 68, 68, 0.3)",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Card Content */}
            <CardContent sx={{ p: 3 }}>
              {/* Description */}
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                {tender.description}
              </Typography>

              {/* All Form Details Grid */}
              <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      background: (t) =>
                        t.palette.mode === "dark"
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(99, 102, 241, 0.05)",
                      border: (t) =>
                        t.palette.mode === "dark"
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "1px solid rgba(99, 102, 241, 0.1)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontWeight: 600, display: "block", mb: 1 }}
                    >
                      Start Date
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {new Date(tender.startDate).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      background: (t) =>
                        t.palette.mode === "dark"
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(245, 158, 11, 0.05)",
                      border: (t) =>
                        t.palette.mode === "dark"
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "1px solid rgba(245, 158, 11, 0.1)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontWeight: 600, display: "block", mb: 1 }}
                    >
                      Pre-Bid Meeting
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {new Date(tender.preBidMeeting).toLocaleString()}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      background: (t) =>
                        t.palette.mode === "dark"
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(239, 68, 68, 0.05)",
                      border: (t) =>
                        t.palette.mode === "dark"
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "1px solid rgba(239, 68, 68, 0.1)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontWeight: 600, display: "block", mb: 1 }}
                    >
                      Submission Deadline
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {new Date(tender.lastDateSubmission).toLocaleString()}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      background: (t) =>
                        t.palette.mode === "dark"
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(168, 85, 247, 0.05)",
                      border: (t) =>
                        t.palette.mode === "dark"
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "1px solid rgba(168, 85, 247, 0.1)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontWeight: 600, display: "block", mb: 1 }}
                    >
                      Bid Opening
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {new Date(tender.bidOpening).toLocaleString()}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      background: (t) =>
                        t.palette.mode === "dark"
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(34, 197, 94, 0.05)",
                      border: (t) =>
                        t.palette.mode === "dark"
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "1px solid rgba(34, 197, 94, 0.1)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontWeight: 600, display: "block", mb: 1 }}
                    >
                      Reference No
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {tender.referenceNo}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      background: (t) =>
                        t.palette.mode === "dark"
                          ? "rgba(255,255,255,0.05)"
                          : tender.corrigendum === "Active"
                          ? "rgba(34, 197, 94, 0.05)"
                          : "rgba(107, 114, 128, 0.05)",
                      border: (t) =>
                        t.palette.mode === "dark"
                          ? "1px solid rgba(255,255,255,0.1)"
                          : tender.corrigendum === "Active"
                          ? "1px solid rgba(34, 197, 94, 0.1)"
                          : "1px solid rgba(107, 114, 128, 0.1)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontWeight: 600, display: "block", mb: 1 }}
                    >
                      Corrigendum Status
                    </Typography>
                    <Chip
                      label={
                        tender.corrigendum === "Active" ? "Active" : "Inactive"
                      }
                      size="small"
                      color={
                        tender.corrigendum === "Active" ? "success" : "default"
                      }
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  startIcon={<VisibilityIcon />}
                  onClick={() => onViewDocument && onViewDocument(tender)}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: "none",
                    px: 3,
                    py: 1,
                  }}
                >
                  View Document
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  onClick={() => onDownloadTender && onDownloadTender(tender)}
                  disabled={!tender.tenderFilePath}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: "none",
                    px: 3,
                    py: 1,
                  }}
                >
                  Download
                </Button>
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={() => onEditTender && onEditTender(tender)}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: "none",
                    px: 3,
                    py: 1,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                    },
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    setSelectedTender(tender);
                    setDeleteDialogOpen(true);
                  }}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: "none",
                    px: 3,
                    py: 1,
                    bgcolor: "error.main",
                    "&:hover": {
                      bgcolor: "error.dark",
                    },
                  }}
                >
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Fade>
      ))}

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: 3,
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          },
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Delete Tender
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Alert severity="warning" sx={{ mb: 2 }}>
            This action cannot be undone. Are you sure you want to delete this
            tender?
          </Alert>
          {selectedTender && (
            <Typography variant="body2" color="text.secondary">
              Tender: <strong>{selectedTender.tenderTitle}</strong>
            </Typography>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button
            onClick={() => setDeleteDialogOpen(false)}
            variant="outlined"
            disabled={deleteLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={confirmDelete}
            variant="contained"
            color="error"
            disabled={deleteLoading}
            sx={{
              bgcolor: "error.main",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            {deleteLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default TenderCardsList;
