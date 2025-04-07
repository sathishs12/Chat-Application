// // // import { Box } from "@mui/material";
// // // import Header from "./components/header/Header";
// // // import ChatApp from "./components/group/ChatApp";

// // // function App() {
// // //   return (
// // //     <Box sx={{ backgroundColor: "#efe8ff", height: "100vh", display: "flex" }}>
// // //       {/* Sidebar (Header) */}
// // //       <Box sx={{ width: "70px", flexShrink: 0 }}>
// // //         <Header />
// // //       </Box>

// // //       {/* Main Chat Area */}
// // //       <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
// // //         <ChatApp />
// // //       </Box>
// // //     </Box>
// // //   );
// // // }

// // // export default App;


// // import { useState } from "react";
// // import { Box } from "@mui/material";
// // import Header from "./components/header/Header";
// // import ChatApp from "./components/group/ChatApp";
// // import Home from "./components/home/Home"; // Import Home component
// // // import SideBar from "./components/sidebar/SideBar"; // Import Sidebar

// // function App() {
// //   const [activeView, setActiveView] = useState<"home" | "chat">("home");

// //   return (
// //     <Box sx={{ backgroundColor: "#efe8ff", height: "100vh", display: "flex" }}>
// //       {/* Sidebar */}
// //       <Box sx={{ width: "70px", flexShrink: 0 }}>
// //         <Header setActiveView={setActiveView} /> {/* Pass setter function */}
// //       </Box>

// //       {/* Main Content (Home or ChatApp) */}
// //       <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
// //         {activeView === "home" ? <Home /> : <ChatApp />}
// //       </Box>
// //     </Box>
// //   );
// // }

// // export default App;


// import { useState } from "react";
// import { Box } from "@mui/material";
// import Header from "./components/header/Header";
// import ChatApp from "./components/group/ChatApp";
// import Home from "./components/home/Home";

// function App() {
//   const [activeView, setActiveView] = useState<"home" | "chat">("home");

//   return (
//     <Box sx={{ backgroundColor: "#efe8ff", height: "100vh", display: "flex" }}>
//       {/* Show Header only when in chat mode */}
//       {activeView === "chat" && (
//         <Box sx={{ width: "70px", flexShrink: 0 }}>
//           <Header setActiveView={setActiveView} />
//         </Box>
//       )}

//       {/* Main Content (Home or ChatApp) */}
//       <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         {activeView === "home" ? <Home setActiveView={setActiveView} /> : <ChatApp />}
//       </Box>
//     </Box>
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/header/Header";
import ChatApp from "./components/group/ChatApp";
import Home from "./components/home/Home";
import Notifications from "./components/notifications/Notifications";
// import "./App.css";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeView, setActiveView] = useState<"home" | "chat" | "notifications" | "settings">("home");

  // Update activeView based on URL
  useEffect(() => {
    if (location.pathname === "/chat") {
      setActiveView("chat");
    } else if (location.pathname === "/notifications") {
      setActiveView("notifications");
    } else if (location.pathname === "/settings") {
      setActiveView("settings");
    } else {
      setActiveView("home");
    }
  }, [location.pathname]);

  const handleNavigation = (view: "home" | "chat" | "notifications" | "settings") => {
    setActiveView(view);
    navigate(view === "home" ? "/" : `/${view}`);
  };

  return (
    <Box sx={{ backgroundColor: "#efe8ff", height: "100vh", display: "flex" }}>
      {/* Show Header when in chat or notifications mode */}
      {(activeView === "chat" || activeView === "notifications"|| activeView === "settings") && (
        <Box className="sideBar">
          <Header setActiveView={handleNavigation} />
        </Box>
      )}

      {/* Main Content */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Routes>
          <Route path="/" element={<Home setActiveView={handleNavigation} />} />
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </Box>
    </Box>
  );
}


export default App;
