// // // import { Box, Typography, Button } from "@mui/material";
// // // import personOne from "../../assets/HomeBG.jpg";
// // // import personTwo from "../../assets/istockphoto-1460124878-612x612.jpg";

// // // interface HomeProps {
// // //   setActiveView: (view: "home" | "chat") => void;
// // // }

// // // const Home: React.FC<HomeProps> = ({ setActiveView }) => {
// // //   return (
// // //     <>
// // //       <Typography
// // //         variant="h4"
// // //         fontWeight="bold"
// // //         sx={{ marginLeft: "40px", marginTop: "24px", color: "#4f4a4a" }}
// // //       >
// // //         Welcome to Chat Application
// // //       </Typography>

// // //       <Box
// // //         sx={{
// // //           display: "flex",
// // //           alignItems: "center",
// // //           justifyContent: "space-between",
// // //           height: "100vh",
// // //           padding: "0 10%",
// // //           color: "#4f4a4a",
// // //         }}
// // //       >
// // //         {/* Left Section - Header, Text & Buttons */}
// // //         <Box sx={{ maxWidth: "40%" }}>
// // //           <Typography variant="h2" fontWeight="bold">
// // //             Connect, Chat & Collaborate
// // //           </Typography>
// // //           <Typography variant="h6" sx={{ margin: "20px 0" }}>
// // //             Seamless conversations at your fingertips. Stay connected anytime, anywhere.
// // //           </Typography>

// // //           {/* "Try It Demo" Button */}
// // //           <Button
// // //             variant="contained"
// // //             color="primary"
// // //             sx={{ marginTop: "20px" }}
// // //             onClick={() => setActiveView("chat")}
// // //           >
// // //             Try It Demo
// // //           </Button>
// // //         </Box>

// // //         {/* Right Section - Images with Overlay */}
// // //         <Box sx={{ position: "relative", display: "flex", gap: 2 }}>
// // //           {[personOne, personTwo].map((person, index) => (
// // //             <Box
// // //               key={index}
// // //               sx={{
// // //                 position: "relative",
// // //                 width: 250,
// // //                 height: "auto",
// // //                 borderRadius: 2,
// // //                 boxShadow: 3,
// // //                 overflow: "hidden",
// // //               }}
// // //             >
// // //               <Box
// // //                 component="img"
// // //                 src={person}
// // //                 alt={`Person ${index + 1}`}
// // //                 sx={{ width: "100%", height: "100%", objectFit: "cover" }}
// // //               />
// // //               {/* Overlay */}
// // //               <Box
// // //                 sx={{
// // //                   position: "absolute",
// // //                   bottom: 0,
// // //                   left: 0,
// // //                   width: "100%",
// // //                   background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
// // //                   color: "white",
// // //                   padding: "10px",
// // //                   textAlign: "center",
// // //                 }}
// // //               >
// // //                 <Typography variant="body1" fontWeight="bold">
// // //                   {index === 0 ? "Real-time Messaging" : "Secure & Private"}
// // //                 </Typography>
// // //               </Box>
// // //             </Box>
// // //           ))}
// // //         </Box>
// // //       </Box>
// // //     </>
// // //   );
// // // };

// // // export default Home;


// // import { useState } from "react";
// // import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, TextField } from "@mui/material";
// // import personOne from "../../assets/HomeBG.jpg";
// // import personTwo from "../../assets/istockphoto-1460124878-612x612.jpg";

// // interface HomeProps {
// //   setActiveView: (view: "home" | "chat") => void;
// // }

// // const Home: React.FC<HomeProps> = ({ setActiveView }) => {
// //   const [openDemoChat, setOpenDemoChat] = useState(false);

// //   return (
// //     <>
// //       {/* <Typography
// //         variant="h4"
// //         fontWeight="bold"
// //         sx={{ marginLeft: "40px", marginTop: "24px", color: "#4f4a4a" }}
// //       >
// //         Welcome to Chat Application
// //       </Typography> */}

// //       <Box
// //         sx={{
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "space-between",
// //           height: "100vh",
// //           padding: "0 10%",
// //           color: "#4f4a4a",
// //         }}
// //       >
// //         {/* Left Section - Header, Text & Buttons */}
// //         <Box sx={{ maxWidth: "40%" }}>
// //           <Typography variant="h2" fontWeight="bold">
// //             Connect, Chat & Collaborate
// //           </Typography>
// //           <Typography variant="h6" sx={{ margin: "20px 0" }}>
// //             Seamless conversations at your fingertips. Stay connected anytime, anywhere.
// //           </Typography>

// //           {/* Buttons */}
// //           <Box sx={{ display: "flex", gap: 2 }}>
// //             <Button
// //               variant="contained"
// //               color="primary"
// //               sx={{backgroundColor:"rebeccapurple"}}
// //               onClick={() => setActiveView("chat")}
// //             >
// //               Start Chat
// //             </Button>

// //             <Button
// //               variant="outlined"
// //               color="secondary"
// //               onClick={() => setOpenDemoChat(true)}
// //             >
// //               Try It Demo
// //             </Button>
// //           </Box>
// //         </Box>

// //         {/* Right Section - Images with Overlay */}
// //         <Box sx={{ position: "relative", display: "flex", gap: 2 }}>
// //           {[personOne, personTwo].map((person, index) => (
// //             <Box
// //               key={index}
// //               sx={{
// //                 position: "relative",
// //                 width: 250,
// //                 height: "auto",
// //                 borderRadius: 2,
// //                 boxShadow: 3,
// //                 overflow: "hidden",
// //               }}
// //             >
// //               <Box
// //                 component="img"
// //                 src={person}
// //                 alt={`Person ${index + 1}`}
// //                 sx={{ width: "100%", height: "100%", objectFit: "cover" }}
// //               />
// //               {/* Overlay */}
// //               <Box
// //                 sx={{
// //                   position: "absolute",
// //                   bottom: 0,
// //                   left: 0,
// //                   width: "100%",
// //                   background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
// //                   color: "white",
// //                   padding: "10px",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 <Typography variant="body1" fontWeight="bold">
// //                   {index === 0 ? "Real-time Messaging" : "Secure & Private"}
// //                 </Typography>
// //               </Box>
// //             </Box>
// //           ))}
// //         </Box>
// //       </Box>

// //       {/* Demo Chat Popup */}
// //       <Dialog open={openDemoChat} onClose={() => setOpenDemoChat(false)}>
// //         <DialogTitle>Demo Chat</DialogTitle>
// //         <DialogContent>
// //           <Typography variant="body2">This is a demo chat. Type a message below:</Typography>
// //           <TextField fullWidth variant="outlined" placeholder="Type a message..." sx={{ mt: 2 }} />
// //           <Button onClick={() => setOpenDemoChat(false)} sx={{ mt: 2 }} color="primary">
// //             Close
// //           </Button>
// //         </DialogContent>
// //       </Dialog>
// //     </>
// //   );
// // };

// // export default Home;
// // src/components/home/Home.tsx
// import React, { useState } from 'react';
// import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
// import { motion } from 'framer-motion';
// import personOne from '../../assets/HomeBG.jpg';
// import personTwo from '../../assets/istockphoto-1460124878-612x612.jpg';
// import { useNavigate } from 'react-router-dom';

// interface HomeProps {
//   setActiveView: (view: "home" | "chat") => void;
// }

// const Home: React.FC<HomeProps> = ({ setActiveView }) => {
//   const navigate = useNavigate();  
//   const [openDemoChat, setOpenDemoChat] = useState(false);
//   const animationKey = performance.now();

//   const handleStartChatClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setActiveView("chat");
//     navigate("/chat");  // Use navigate instead of window.location.href
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           height: "100vh",
//           padding: "0 10%",
//           color: "#4f4a4a",
//         }}
//       >
//         {/* Left Section - Header, Text & Buttons */}
//         <Box sx={{ maxWidth: "40%" }}>
//           <motion.div
//             key={animationKey}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Typography variant="h2" fontWeight="bold">
//               Connect, Chat & Collaborate
//             </Typography>
//           </motion.div>

//           <motion.div
//             key={animationKey + 1}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <Typography variant="h6" sx={{ margin: "20px 0" }}>
//               Seamless conversations at your fingertips. Stay connected anytime, anywhere.
//             </Typography>
//           </motion.div>

//           {/* Buttons */}
//           <Box sx={{ display: "flex", gap: 2 }}>
//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ backgroundColor: "rebeccapurple" }}
//                 onClick={handleStartChatClick}
//               >
//                 Start Chat
//               </Button>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//               <Button variant="outlined" color="secondary" onClick={() => setOpenDemoChat(true)}>
//                 Try It Demo
//               </Button>
//             </motion.div>
//           </Box>
//         </Box>

//         {/* Right Section - Images with Overlay */}
//         <Box sx={{ position: "relative", display: "flex", gap: 2 }}>
//           {[personOne, personTwo].map((person, index) => (
//             <motion.div
//               key={animationKey + index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: index * 0.3 }}
//               whileHover={{ scale: 1.1 }}
//               style={{
//                 borderRadius: "12px",
//                 overflow: "hidden",
//                 boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
//               }}
//             >
//               <Box
//                 sx={{
//                   position: "relative",
//                   width: 250,
//                   height: "auto",
//                   borderRadius: 2,
//                   overflow: "hidden",
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={person}
//                   alt={`Person ${index + 1}`}
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     transition: "transform 0.3s ease-in-out",
//                   }}
//                 />

//                 {/* Overlay */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                   style={{
//                     position: "absolute",
//                     bottom: 0,
//                     left: 0,
//                     width: "100%",
//                     background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
//                     color: "white",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   <Typography variant="body1" fontWeight="bold">
//                     {index === 0 ? "Real-time Messaging" : "Secure & Private"}
//                   </Typography>
//                 </motion.div>
//               </Box>
//             </motion.div>
//           ))}
//         </Box>
//       </Box>

//       {/* Demo Chat Popup */}
//       <Dialog open={openDemoChat} onClose={() => setOpenDemoChat(false)}>
//         <DialogTitle>Demo Chat</DialogTitle>
//         <DialogContent>
//           <Typography variant="body2">This is a demo chat. Type a message below:</Typography>
//           <TextField fullWidth variant="outlined" placeholder="Type a message..." sx={{ mt: 2 }} />
//           <Button onClick={() => setOpenDemoChat(false)} sx={{ mt: 2 }} color="primary">
//             Close
//           </Button>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import personOne from "../../assets/HomeBG.jpg";
import personTwo from "../../assets/istockphoto-1460124878-612x612.jpg";
import personThree from "../../assets/personThree.jpg"; // Import additional images
import personFour from "../../assets/personFour.jpg";

interface HomeProps {
  setActiveView: (view: "home" | "chat") => void;
}

const Home: React.FC<HomeProps> = ({ setActiveView }) => {
  const navigate = useNavigate();
  const [openDemoChat, setOpenDemoChat] = useState(false);
  const animationKey = performance.now();

  const handleStartChatClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveView("chat");
    navigate("/chat");
  };

  // Array of images with corresponding descriptions
  const images = [
    { src: personOne, label: "Real-time Messaging" },
    { src: personTwo, label: "Secure & Private" },
    { src: personThree, label: "Seamless Collaboration" },
    { src: personFour, label: "Stay Connected" }
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100vh",
          padding: "0 10%",
          color: "#4f4a4a",
        }}
      >
        {/* Left Section - Header, Text & Buttons */}
        <Box sx={{ maxWidth: "40%" }}>
          <motion.div
            key={animationKey}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" fontWeight="bold">
              Connect, Chat & Collaborate
            </Typography>
          </motion.div>

          <motion.div
            key={animationKey + 1}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h6" sx={{ margin: "20px 0" }}>
              Seamless conversations at your fingertips. Stay connected anytime, anywhere.
            </Typography>
          </motion.div>

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ backgroundColor: "rebeccapurple" }}
                onClick={handleStartChatClick}
              >
                Start Chat
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outlined" color="secondary" onClick={() => setOpenDemoChat(true)}>
                Try It Demo
              </Button>
            </motion.div>
          </Box>
        </Box>

        {/* Right Section - Images Grid */}
        <Box sx={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
          {images.map((person, index) => (
            <motion.div
              key={animationKey + index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ scale: 1.1 }}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 200,
                  height: 150,
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={person.src}
                  alt={person.label}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
                    color: "white",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body1" fontWeight="bold">
                    {person.label}
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Demo Chat Popup */}
      <Dialog open={openDemoChat} onClose={() => setOpenDemoChat(false)}>
        <DialogTitle>Demo Chat</DialogTitle>
        <DialogContent>
          <Typography variant="body2">This is a demo chat. Type a message below:</Typography>
          <TextField fullWidth variant="outlined" placeholder="Type a message..." sx={{ mt: 2 }} />
          <Button onClick={() => setOpenDemoChat(false)} sx={{ mt: 2 }} color="primary">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Home;
