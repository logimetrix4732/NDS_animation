import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Drawer,
  Button,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  BarChart as BarChartIcon,
  TableChart as TableChartIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import nds_logo from "../assets/img/nds_logo.png";
import ReportIcon from "@mui/icons-material/Report";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AdminSidebar = ({ mobileOpen, setMobileOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all admin data
    localStorage.removeItem("token");
    localStorage.removeItem("user_role");
    localStorage.removeItem("remembered_email");

    // Redirect to login
    navigate("/AdminLogin");
  };

  const menuItems = [
    { text: "Overview", icon: <DashboardIcon />, path: "/AdminPage" },
    {
      text: "Publication",
      icon: <TableChartIcon />,
      path: "/AdminPublication",
    },
    { text: "Tender", icon: <SettingsIcon />, path: "/AdminTender" },
    { text: "Tender Logs", icon: <Diversity2Icon />, path: "/AdminLogs" },
    {
      text: "MPO & Animal Productivity Servies",
      icon: <Diversity2Icon />,
      path: "/AdminLogs",
    },
  ];

  const sidebarContent = (
    <Box
      sx={{ pl: 2, height: "100%", display: "flex", flexDirection: "column" }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ px: 1, py: 1.5 }}
      >
        <img
          src={nds_logo}
          alt="NDDB"
          style={{ width: "148px", height: "65px", marginLeft: "15px" }}
          loading="lazy"
        />
      </Stack>
      <Divider />

      {/* Menu Items */}
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Logout Button */}
      <Box sx={{ p: 2, borderTop: 1, borderColor: "divider" }}>
        <Button
          fullWidth
          variant="outlined"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{
            borderRadius: 2,
            py: 1.5,
            borderWidth: 2,
            fontWeight: 600,
            "&:hover": {
              borderWidth: 2,
              backgroundColor: "error.main",
              color: "white",
            },
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        {sidebarContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open
      >
        {sidebarContent}
      </Drawer>
    </>
  );
};

export default AdminSidebar;
