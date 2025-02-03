import React from "react";
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = ({ handleLoginOpen, handleSignUpOpen }) => { // ✅ Receive SignUp handler
  const { currentUser, logout } = useAuth();

  return (
    <AppBar position="static" sx={{ backgroundColor: "rgba(0,0,0,0.7)", boxShadow: "none", padding: "0em 1em" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
        <Button color="secondary">
            QSchool Sports
          </Button>
        </NavLink>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          {!currentUser && (
            <>
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                <Button color="secondary">About</Button>
              </NavLink>
              <NavLink to="/case-studies" style={{ textDecoration: "none" }}>
                <Button color="secondary">Case Studies</Button>
              </NavLink>
              <NavLink to="/contact-us" style={{ textDecoration: "none" }}>
                <Button color="secondary">Contact Us</Button>
              </NavLink>
            </>
          )}

          {currentUser ? (
            <>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "limegreen" }}>
                {currentUser.username || currentUser.name || currentUser.email}
              </Typography>
              <Button variant="contained" color="secondary" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              {/* ✅ Ensure the Sign Up button triggers modal */}
              <Button variant="outlined" color="secondary" onClick={handleSignUpOpen}>
                Sign Up
              </Button>
              <Button variant="contained" color="primary" onClick={handleLoginOpen}>
                Login
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
