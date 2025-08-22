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
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  BarChart as BarChartIcon,
  TableChart as TableChartIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import nds_logo from "../assets/img/nds_logo.png";
import ReportIcon from "@mui/icons-material/Report";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AdminSidebar = ({ mobileOpen, setMobileOpen }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Overview", icon: <DashboardIcon />, path: "/AdminPage" },
    {
      text: "Publication",
      icon: <TableChartIcon />,
      path: "/AdminPublication",
    },
    { text: "Tender", icon: <SettingsIcon />, path: "/AdminTender" },
    { text: "Logs", icon: <Diversity2Icon />, path: "/AdminLogs" },
  ];

  const sidebarContent = (
    <Box sx={{ pl: 2 }}>
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
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
