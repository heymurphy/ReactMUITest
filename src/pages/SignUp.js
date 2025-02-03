import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeInOut" } },
};

const SignUp = ({ onClose }) => {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (e) => setProfilePicture(e.target.files[0]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");

    try {
      let profilePictureURL = "";
      if (profilePicture) {
        const fileRef = ref(storage, `profile_pictures/${username}`);
        await uploadBytes(fileRef, profilePicture);
        profilePictureURL = await getDownloadURL(fileRef);
      }

      await signup(email, password, name, username, profilePictureURL);
      setSuccessMessage("✅ Registration successful! Redirecting...");
      setTimeout(() => onClose(), 1500);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <motion.div className="backdrop" initial="hidden" animate="visible" exit="exit" variants={modalVariants}>
      <Box sx={{ width: 450, height: 500, borderRadius: "20px", backgroundColor: "#121212", padding: "30px", boxShadow: "0px 0px 50px rgba(213, 0, 249, 0.5)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h5" color="secondary" sx={{ mb: 2 }}>Sign Up</Typography>
        {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <Box component="form" onSubmit={handleSignUp} sx={{ width: "80%", display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Name" variant="outlined" fullWidth required value={name} onChange={(e) => setName(e.target.value)} />
          <TextField label="Username" variant="outlined" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
          <TextField label="Email" variant="outlined" fullWidth required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Password" variant="outlined" fullWidth required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="file" onChange={handleFileChange} style={{ marginBottom: "10px" }} />
          <Button type="submit" variant="contained" color="primary">Register</Button>
          <Button onClick={onClose} color="secondary">Close</Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default SignUp;