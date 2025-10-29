import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  alpha,
} from "@mui/material";
import {
  Add,
  Business,
  Category,
  LocationOn,
  Info,
  AddCircle,
  RemoveCircle,
  ExpandMore,
} from "@mui/icons-material";

const OrganisationDialog = ({
  orgDialogOpen,
  setOrgDialogOpen,
  editingOrg,
  newOrg,
  setNewOrg,
  newStateData,
  setNewStateData,
  newLink,
  setNewLink,
  loading,
  saveOrgService,
  removeStateFromOrg,
}) => {
  return (
    <Dialog
      open={orgDialogOpen}
      onClose={() => setOrgDialogOpen(false)}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        },
      }}
    >
      <DialogTitle
        sx={{
          pb: 2,
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: alpha("#1976d2", 0.05),
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              p: 1,
              bgcolor: "primary.main",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Add sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {editingOrg
              ? "Edit Organisation Service"
              : "Add New Organisation Service"}
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ pt: 4, pb: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box
              sx={{
                p: 3,
                bgcolor: alpha("#1976d2", 0.02),
                borderRadius: 2,
                border: "1px solid",
                borderColor: alpha("#1976d2", 0.1),
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: "primary.main",
                }}
              >
                Basic Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Organisation Title"
                    value={newOrg.Title}
                    onChange={(e) =>
                      setNewOrg((prev) => ({
                        ...prev,
                        Title: e.target.value,
                      }))
                    }
                    placeholder="e.g., Milk Service"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Business color="primary" sx={{ fontSize: 20 }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "background.paper",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Organisation Type"
                    value={newOrg.Type}
                    onChange={(e) =>
                      setNewOrg((prev) => ({
                        ...prev,
                        Type: e.target.value,
                      }))
                    }
                    placeholder="e.g., MILK PRODUCER ORGANISATION"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Category color="primary" sx={{ fontSize: 20 }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "background.paper",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* States Data Section */}
          <Grid item xs={12}>
            <Box
              sx={{
                mt: 2,
                p: 3,
                bgcolor: alpha("#2e7d32", 0.05),
                borderRadius: 2,
                border: "1px solid",
                borderColor: alpha("#2e7d32", 0.1),
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    bgcolor: "#2e7d32",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LocationOn sx={{ color: "white", fontSize: 18 }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#2e7d32",
                  }}
                >
                  States Data
                </Typography>
              </Box>

              {newOrg.states_data.map((state, stateIndex) => (
                <Accordion key={stateIndex} sx={{ mb: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {state.name || "New State"}
                      </Typography>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeStateFromOrg(stateIndex);
                        }}
                        sx={{
                          bgcolor: alpha("#d32f2f", 0.1),
                          "&:hover": { bgcolor: alpha("#d32f2f", 0.2) },
                        }}
                      >
                        <RemoveCircle />
                      </IconButton>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="State Name"
                          value={state.name}
                          onChange={(e) => {
                            const updatedStates = [...newOrg.states_data];
                            updatedStates[stateIndex].name = e.target.value;
                            setNewOrg((prev) => ({
                              ...prev,
                              states_data: updatedStates,
                            }));
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Description"
                          value={state.description}
                          onChange={(e) => {
                            const updatedStates = [...newOrg.states_data];
                            updatedStates[stateIndex].description =
                              e.target.value;
                            setNewOrg((prev) => ({
                              ...prev,
                              states_data: updatedStates,
                            }));
                          }}
                        />
                      </Grid>

                      {/* Links Section */}
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            mt: 2,
                            p: 2,
                            bgcolor: "background.paper",
                            borderRadius: 1,
                            border: "1px solid",
                            borderColor: "divider",
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{
                              mb: 2,
                              fontWeight: 600,
                              color: "text.primary",
                            }}
                          >
                            Links
                          </Typography>

                          {state.links?.map((link, linkIndex) => (
                            <Box
                              key={linkIndex}
                              sx={{
                                display: "flex",
                                gap: 1,
                                mb: 2,
                                p: 2,
                                bgcolor: alpha("#1976d2", 0.05),
                                borderRadius: 1,
                              }}
                            >
                              <TextField
                                size="small"
                                label="Title"
                                value={link.title}
                                onChange={(e) => {
                                  const updatedStates = [...newOrg.states_data];
                                  updatedStates[stateIndex].links[
                                    linkIndex
                                  ].title = e.target.value;
                                  setNewOrg((prev) => ({
                                    ...prev,
                                    states_data: updatedStates,
                                  }));
                                }}
                                sx={{ flex: 1 }}
                              />
                              <TextField
                                size="small"
                                label="URL"
                                value={link.url}
                                onChange={(e) => {
                                  const updatedStates = [...newOrg.states_data];
                                  updatedStates[stateIndex].links[
                                    linkIndex
                                  ].url = e.target.value;
                                  setNewOrg((prev) => ({
                                    ...prev,
                                    states_data: updatedStates,
                                  }));
                                }}
                                sx={{ flex: 1 }}
                              />
                              <IconButton
                                size="small"
                                color="error"
                                onClick={() => {
                                  const updatedStates = [...newOrg.states_data];
                                  updatedStates[stateIndex].links.splice(
                                    linkIndex,
                                    1
                                  );
                                  setNewOrg((prev) => ({
                                    ...prev,
                                    states_data: updatedStates,
                                  }));
                                }}
                                sx={{
                                  bgcolor: alpha("#d32f2f", 0.1),
                                  "&:hover": {
                                    bgcolor: alpha("#d32f2f", 0.2),
                                  },
                                }}
                              >
                                <RemoveCircle />
                              </IconButton>
                            </Box>
                          ))}

                          {/* Add New Link */}
                          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                            <TextField
                              size="small"
                              label="New Link Title"
                              value={newLink.title}
                              onChange={(e) =>
                                setNewLink((prev) => ({
                                  ...prev,
                                  title: e.target.value,
                                }))
                              }
                              sx={{ flex: 1 }}
                            />
                            <TextField
                              size="small"
                              label="New Link URL"
                              value={newLink.url}
                              onChange={(e) =>
                                setNewLink((prev) => ({
                                  ...prev,
                                  url: e.target.value,
                                }))
                              }
                              sx={{ flex: 1 }}
                            />
                            <IconButton
                              color="primary"
                              onClick={() => {
                                if (newLink.title && newLink.url) {
                                  const updatedStates = [...newOrg.states_data];
                                  updatedStates[stateIndex].links = [
                                    ...(updatedStates[stateIndex].links || []),
                                    { ...newLink },
                                  ];
                                  setNewOrg((prev) => ({
                                    ...prev,
                                    states_data: updatedStates,
                                  }));
                                  setNewLink({ title: "", url: "" });
                                }
                              }}
                              sx={{
                                bgcolor: alpha("#1976d2", 0.1),
                                "&:hover": {
                                  bgcolor: alpha("#1976d2", 0.2),
                                },
                              }}
                            >
                              <AddCircle />
                            </IconButton>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))}

              {/* Add New State */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 3,
                  p: 3,
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  border: "2px dashed",
                  borderColor: alpha("#2e7d32", 0.3),
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: alpha("#2e7d32", 0.5),
                    bgcolor: alpha("#2e7d32", 0.02),
                  },
                }}
              >
                <TextField
                  size="small"
                  label="New State Name"
                  value={newStateData.name}
                  onChange={(e) =>
                    setNewStateData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  placeholder="e.g., Maharashtra"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOn sx={{ color: "#2e7d32", fontSize: 18 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ flex: 1 }}
                />
                <TextField
                  size="small"
                  label="New State Description"
                  value={newStateData.description}
                  onChange={(e) =>
                    setNewStateData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="e.g., Leading milk producer state"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Info sx={{ color: "#2e7d32", fontSize: 18 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ flex: 1 }}
                />
                <IconButton
                  color="primary"
                  onClick={() => {
                    if (newStateData.name && newStateData.description) {
                      setNewOrg((prev) => ({
                        ...prev,
                        states_data: [...prev.states_data, { ...newStateData }],
                      }));
                      setNewStateData({
                        name: "",
                        description: "",
                        links: [],
                      });
                    }
                  }}
                  sx={{
                    bgcolor: "#2e7d32",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#1b5e20",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <AddCircle />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: 3, pt: 2 }}>
        <Button
          onClick={() => setOrgDialogOpen(false)}
          variant="outlined"
          sx={{ px: 4, py: 1.5 }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => saveOrgService(newOrg)}
          disabled={loading}
          sx={{
            px: 4,
            py: 1.5,
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          {loading ? <CircularProgress size={20} /> : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrganisationDialog;
