import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeInOut" } },
};

const SignUp = ({ onClose }) => {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // ✅ Handles Firebase Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setSuccessMessage(""); // Clear previous success

    try {
      await signup(email, password, name, username, profilePicture);
      setSuccessMessage("✅ Account Created! Redirecting...");
      setTimeout(() => {
        window.location.reload(); // ✅ Ensures the user data updates
      }, 2000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <motion.div
      className="backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
       <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" onClick={(e) => e.stopPropagation()}>
        <Box
          sx={{
            width: 650,
            height: 650,
            borderRadius: "50% 50%",
            backgroundColor: "black",
            backgroundImage: "linear-gradient(to bottom, rgba(10, 10, 11, 0.6), rgba(83, 16, 172, 0.3), rgba(199, 28, 205, 0.3), rgba(192, 241, 162, 0.1), rgba(2, 0, 4, 0.3))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 80px 30px rgba(213, 0, 249, 0.15)",
            padding: "30px",
          }}
        >
          <Typography variant="h5" color="secondary" sx={{ mb: 3, textAlign: "center", paddingTop:"2em", opacity: ".7" }}>
            Create Your Account
          </Typography>

          {successMessage && <Alert severity="success">{successMessage}</Alert>}
          {error && <Alert severity="error">{error}</Alert>}

          <Box component="form" onSubmit={handleSignUp} sx={{ width: "80%", display: "flex", flexDirection: "column", gap: 2, paddingTop: "0em" }}>
            <TextField label="Name" fullWidth required value={name} onChange={(e) => setName(e.target.value)} />
            <TextField label="Username" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
            <TextField label="Email" type="email" fullWidth required value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" fullWidth required value={password} onChange={(e) => setPassword(e.target.value)} />
            <TextField label="Profile Picture URL" fullWidth value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} />
            <Button type="submit" variant="contained" color="primary" size="large" 
  sx={{ width: "30%", px: 2, fontWeight: "bold", alignSelf: "center", margin: "1em 0 0 0", opacity: ".7"  }}>
              Submit
            </Button>
            <Button onClick={onClose} color="secondary" size="small" sx={{ width: "30%", px: 2, fontWeight: "normal", alignSelf: "center", opacity: ".7" }}>
              Close
            </Button>
          </Box>
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
