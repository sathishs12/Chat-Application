// import React, { useState } from "react";
// import { Box, Drawer, Avatar, IconButton, Divider, Typography, useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import "./Styles.css";

// const SideBar: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

//   const toggleDrawer = (state: boolean) => () => {
//     setOpen(state);
//   };

//   return (
//     <Box className="sidebar-container">
//       {/* Sidebar (Profile + Icons) */}
//       <Box className="sidebar" sx={{ width: isMobile ? 70 : 90 }}>
//         {/* Profile Photo (Click to Open Drawer) */}
//         <IconButton className="profile-button" onClick={toggleDrawer(true)}>
//           <Avatar
//             className="profile-avatar"
//             src="https://via.placeholder.com/100" // Replace with real image
//             alt="User Profile"
//             sx={{ width: isMobile ? 45 : 55, height: isMobile ? 45 : 55 }}
//           />
//         </IconButton>

//         <Divider className="sidebar-divider" />

//         {/* Sidebar Outlined Icons */}
//         <Box className="sidebar-icons">
//           {[HomeOutlinedIcon, ChatOutlinedIcon, NotificationsOutlinedIcon, SettingsOutlinedIcon].map((Icon, index) => (
//             <IconButton key={index} className="sidebar-icon">
//               <Icon fontSize="inherit" sx={{ fontSize: isMobile ? "1.8rem" : "2rem", color: "white" }} />
//             </IconButton>
//           ))}
//         </Box>
//       </Box>

//       {/* Drawer (Opens when Profile is Clicked) */}
//       <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
//         <Box className="drawer-content">
//           <Avatar
//             className="drawer-avatar"
//             src="https://via.placeholder.com/100" // Replace with real image
//             alt="User Profile"
//           />
//           <Typography variant="h6" className="drawer-username">John Doe</Typography>
//           <Typography variant="body2" className="drawer-email">johndoe@example.com</Typography>
//         </Box>
//       </Drawer>
//     </Box>
//   );
// };

// export default SideBar;


// src/components/header/Header.tsx// src/components/header/Header.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Drawer, Avatar, IconButton, Divider, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import "./Styles.css";
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';

interface HeaderProps {
  setActiveView: (view: "home" | "chat" | "notifications" | "settings") => void;
}


const Header: React.FC<HeaderProps> = ({ setActiveView }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<"home" | "chat" | "notifications" | "settings">("chat");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setSelected("home");
    } else if (location.pathname === "/chat") {
      setSelected("chat");
    } else if (location.pathname === "/notifications") {
      setSelected("notifications"); // ✅ Ensure notifications are selected when on this route
    }
  }, [location.pathname]);
  
  

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const handleMouseEnter = (section: string) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  const handleIconClick = (view: "home" | "chat" | "notifications" | "settings") => {
    setSelected(view);
    setActiveView(view);
  };
  
  return (
    <Box className="sidebar-container">
      {/* Sidebar */}
      <Box 
        className={`sidebar ${hoveredSection ? 'sidebar-hover' : ''}`}
        onMouseEnter={() => handleMouseEnter('sidebar')}
        onMouseLeave={handleMouseLeave}
        sx={{ width: 90, display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* Profile Photo (Click to Open Drawer) */}
        <IconButton className="profile-button" onClick={toggleDrawer(true)}>
          <Avatar
            className="profile-avatar"
            src="https://via.placeholder.com/100"
            alt="User Profile"
            sx={{ width: 55, height: 55 }}
          />
        </IconButton>

        <Divider className="sidebar-divider" sx={{ width: "80%", margin: "10px 0", backgroundColor: "white" }} />

        {/* Sidebar Icons with Click Handlers */}
        <Box className="sidebar-icons" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[
            { view: "home" as const, icon: <HomeOutlinedIcon />, label: "Home" },
            { view: "chat" as const, icon: <ChatOutlinedIcon />, label: "Chat" },
            { view: "notifications" as const, icon: <NotificationsOutlinedIcon />, label: "Notifications" },
            { view: "settings" as const, icon: <SettingsOutlinedIcon />, label: "Settings" },
          ].map(({ view, icon }) => (
            <motion.div key={view} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Box
                className={`sidebar-icon-wrapper ${selected === view ? 'selected' : ''}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: selected === view ? "#efe8ff" : "transparent",
                  borderRadius: "12px",
                  width: 60,
                  height: 60,
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <IconButton
                  className="sidebar-icon"
                  onClick={() => handleIconClick(view)}
                  sx={{
                    fontSize: "2rem",
                    color: selected === view ? "#6A5ACD" : "white",
                  }}
                >
                  {icon}
                </IconButton>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Drawer for Profile */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rebeccapurple",
            color: "white",
            width: 300,
            transition: "all 0.3s ease-in-out"
          }
        }}
      >
        <Box className="drawer-content" sx={{ padding: 3, textAlign: "center" }}>
          <Avatar
            className="drawer-avatar"
            src="https://via.placeholder.com/100"
            alt="User Profile"
            sx={{ width: 90, height: 90, margin: "auto" }}
          />
          <Typography variant="h6" className="drawer-username" sx={{ marginTop: 1 }}>
            John Doe
          </Typography>
          <Typography variant="body2" className="drawer-email">
            johndoe@example.com
          </Typography>

          {/* Divider */}
          <Divider sx={{ my: 2, backgroundColor: "white" }} />

          {/* Profile Actions */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              sx={{
                backgroundColor: "#ffffff",
                color: "rebeccapurple",
                fontSize: "0.8rem",
                textTransform: "none",
                "&:hover": { backgroundColor: "#e0e0e0" },
              }}
            >
              Edit Profile
            </Button>

            <Button
              variant="contained"
              startIcon={<LogoutIcon />}
              sx={{
                backgroundColor: "darkred",
                color: "white",
                fontSize: "0.8rem",
                textTransform: "none",
                "&:hover": { backgroundColor: "#a80000" },
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;