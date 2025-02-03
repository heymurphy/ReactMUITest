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

const Login = ({ onClose }) => {
  const { login } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");

    try {
      await login(email, password);
      setSuccessMessage("✅ Success! Redirecting...");
      setTimeout(() => {
        onClose(); 
      }, 1500);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <motion.div className="backdrop" variants={backdropVariants} initial="hidden" animate="visible" exit="exit" onClick={onClose} style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000,
    }}>
      <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" onClick={(e) => e.stopPropagation()}>
        <Box sx={{ width: 450, height: 450, borderRadius: "50%", backgroundImage: "linear-gradient(to bottom, rgba(10, 10, 11, 0.6), rgba(83, 16, 172, 0.4), rgba(199, 28, 205, 0.4), rgba(192, 241, 162, 0.3), rgba(2, 0, 4, 0.4))", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxShadow: "0px 0px 80px 30px rgba(213, 0, 249, 0.1)", padding: "30px", overflow: "hidden" }}>
          <Typography variant="h5" color="secondary" sx={{ mb: 3, textAlign: "center" }}>Login</Typography>
          {successMessage && <Alert severity="success" sx={{ mb: 2, width: "80%" }}>{successMessage}</Alert>}
          <Box component="form" onSubmit={handleLogin} sx={{ width: "80%", display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label="Email" variant="outlined" fullWidth autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ backgroundColor: "#9C27B0", color: "#fff", borderRadius: "8px", input: { color: "#fff" } }} />
            <TextField label="Password" type="password" variant="outlined" fullWidth autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} sx={{ backgroundColor: "#9C27B0", color: "#fff", borderRadius: "8px", input: { color: "#fff" } }} />
            {error && <Typography variant="body2" color="error" sx={{ textAlign: "center" }}>{error}</Typography>}
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 1, fontWeight: "bold", py: 1 }}>Login</Button>
            <Button onClick={onClose} color="secondary" size="small" sx={{ mt: 1, fontWeight: "bold", textTransform: "none", alignSelf: "center" }}>Close</Button>
          </Box>
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default Login;