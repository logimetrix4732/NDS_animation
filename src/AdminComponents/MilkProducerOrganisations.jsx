import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  IconButton,
  Divider,
  alpha,
} from "@mui/material";
import {
  Refresh,
  Add,
  ExpandMore,
  Edit,
  Delete,
  LocationOn,
} from "@mui/icons-material";

const MilkProducerOrganisations = ({
  orgServices,
  loading,
  fetchOrgServices,
  openCreateDialog,
  openEditDialog,
  deleteOrgService,
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Card sx={{ p: 1 }}>
        <CardContent sx={{ p: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: "text.primary",
                }}
              >
                Milk Producer Organisations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage organisation services and their state-wise data
              </Typography>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                startIcon={<Refresh />}
                onClick={fetchOrgServices}
                disabled={loading}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                  },
                }}
              >
                Refresh
              </Button>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={openCreateDialog}
                sx={{
                  px: 4,
                  py: 1.5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(25, 118, 210, 0.4)",
                  },
                }}
              >
                Add New Organisation
              </Button>
            </Stack>
          </Box>

          {orgServices.length === 0 ? (
            <Box
              sx={{
                textAlign: "center",
                py: 8,
                bgcolor: alpha("#1976d2", 0.05),
                borderRadius: 3,
                border: "2px dashed",
                borderColor: alpha("#1976d2", 0.3),
              }}
            >
              <LocationOn sx={{ fontSize: 64, color: "primary.main", mb: 2 }} />
              <Typography variant="h6" sx={{ mb: 1, color: "text.primary" }}>
                No Organisations Found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Start by adding your first milk producer organisation
              </Typography>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={openCreateDialog}
                sx={{
                  px: 4,
                  py: 1.5,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              >
                Add First Organisation
              </Button>
            </Box>
          ) : (
            <Stack spacing={3}>
              {orgServices.map((org, index) => (
                <Accordion
                  key={org.id || index}
                  sx={{
                    mb: 2,
                    "&:before": { display: "none" },
                    "&.Mui-expanded": {
                      bgcolor: alpha("#1976d2", 0.02),
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    sx={{
                      "&:hover": {
                        bgcolor: alpha("#1976d2", 0.05),
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Chip
                          label={org.Type}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {org.Title}
                        </Typography>
                      </Box>
                      <Stack direction="row" spacing={1}>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            openEditDialog(org);
                          }}
                          sx={{
                            bgcolor: alpha("#1976d2", 0.1),
                            "&:hover": {
                              bgcolor: alpha("#1976d2", 0.2),
                            },
                          }}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteOrgService(org.id);
                          }}
                          sx={{
                            bgcolor: alpha("#d32f2f", 0.1),
                            "&:hover": {
                              bgcolor: alpha("#d32f2f", 0.2),
                            },
                          }}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Stack>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 2 }}>
                    <Divider sx={{ mb: 3 }} />

                    {org.states_data?.length === 0 ? (
                      <Box
                        sx={{
                          textAlign: "center",
                          py: 4,
                          bgcolor: alpha("#666", 0.05),
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          No states data available for this organisation
                        </Typography>
                      </Box>
                    ) : (
                      <Grid container spacing={3}>
                        {org.states_data?.map((state, stateIndex) => (
                          <Grid item xs={12} md={6} key={stateIndex}>
                            <Box
                              sx={{
                                p: 3,
                                border: 1,
                                borderColor: "divider",
                                borderRadius: 2,
                                bgcolor: "background.paper",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                  transform: "translateY(-2px)",
                                },
                              }}
                            >
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 600,
                                  mb: 1,
                                  color: "primary.main",
                                }}
                              >
                                {state.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 3, lineHeight: 1.6 }}
                              >
                                {state.description}
                              </Typography>

                              {state.links?.length > 0 && (
                                <Box>
                                  <Typography
                                    variant="subtitle2"
                                    sx={{
                                      fontWeight: 600,
                                      mb: 2,
                                      color: "text.primary",
                                    }}
                                  >
                                    Related Links:
                                  </Typography>
                                  <Stack spacing={1}>
                                    {state.links?.map((link, linkIndex) => (
                                      <Box
                                        key={linkIndex}
                                        sx={{
                                          p: 2,
                                          bgcolor: alpha("#1976d2", 0.05),
                                          borderRadius: 1,
                                          border: "1px solid",
                                          borderColor: alpha("#1976d2", 0.1),
                                        }}
                                      >
                                        <Typography
                                          variant="body2"
                                          sx={{
                                            fontWeight: 600,
                                            mb: 0.5,
                                          }}
                                        >
                                          {link.title}
                                        </Typography>
                                        <a
                                          href={link.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={{
                                            color: "#1976d2",
                                            textDecoration: "none",
                                            fontSize: "0.875rem",
                                          }}
                                        >
                                          {link.url}
                                        </a>
                                      </Box>
                                    ))}
                                  </Stack>
                                </Box>
                              )}
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    )}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default MilkProducerOrganisations;
