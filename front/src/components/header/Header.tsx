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


import React, { useState } from "react";
import { Box, Drawer, Avatar, IconButton, Divider, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./Styles.css";

interface SideBarProps {
  setActiveView: (view: "home" | "chat") => void;
}

const SideBar: React.FC<SideBarProps> = ({ setActiveView }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  return (
    <Box className="sidebar-container">
      {/* Sidebar */}
      <Box className="sidebar" sx={{ width: isMobile ? 70 : 90 }}>
        {/* Profile Photo (Click to Open Drawer) */}
        <IconButton className="profile-button" onClick={toggleDrawer(true)}>
          <Avatar
            className="profile-avatar"
            src="https://via.placeholder.com/100"
            alt="User Profile"
            sx={{ width: isMobile ? 45 : 55, height: isMobile ? 45 : 55 }}
          />
        </IconButton>

        <Divider className="sidebar-divider" />

        {/* Sidebar Icons with Click Handlers */}
        <Box className="sidebar-icons">
          <IconButton className="sidebar-icon" onClick={() => setActiveView("home")}>
            <HomeOutlinedIcon fontSize="inherit" sx={{ fontSize: isMobile ? "1.8rem" : "2rem", color: "white" }} />
          </IconButton>
          <IconButton className="sidebar-icon" onClick={() => setActiveView("chat")}>
            <ChatOutlinedIcon fontSize="inherit" sx={{ fontSize: isMobile ? "1.8rem" : "2rem", color: "white" }} />
          </IconButton>
          <IconButton className="sidebar-icon">
            <NotificationsOutlinedIcon fontSize="inherit" sx={{ fontSize: isMobile ? "1.8rem" : "2rem", color: "white" }} />
          </IconButton>
          <IconButton className="sidebar-icon">
            <SettingsOutlinedIcon fontSize="inherit" sx={{ fontSize: isMobile ? "1.8rem" : "2rem", color: "white" }} />
          </IconButton>
        </Box>
      </Box>

      {/* Drawer for Profile */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box className="drawer-content">
          <Avatar className="drawer-avatar" src="https://via.placeholder.com/100" alt="User Profile" />
          <Typography variant="h6" className="drawer-username">
            John Doe
          </Typography>
          <Typography variant="body2" className="drawer-email">
            johndoe@example.com
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
