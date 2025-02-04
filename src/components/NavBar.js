import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = ({ handleLoginOpen, handleSignUpOpen }) => {
  const { currentUser, logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle Drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "rgba(0,0,0,0.7)", boxShadow: "none", padding: "0em 1em" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Hamburger Menu for Small Screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for Small Screens */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            <ListItem button component={NavLink} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={NavLink} to="/about" onClick={toggleDrawer(false)}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={NavLink} to="/case-studies" onClick={toggleDrawer(false)}>
              <ListItemText primary="Case Studies" />
            </ListItem>
            <ListItem button component={NavLink} to="/contact-us" onClick={toggleDrawer(false)}>
              <ListItemText primary="Contact Us" />
            </ListItem>
            {!currentUser ? (
              <>
                <ListItem button onClick={() => { handleLoginOpen(); toggleDrawer(false); }}>
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem button onClick={() => { handleSignUpOpen(); toggleDrawer(false); }}>
                  <ListItemText primary="Sign Up" />
                </ListItem>
              </>
            ) : (
              <ListItem button onClick={logout}>
                <ListItemText primary="Logout" />
              </ListItem>
            )}
          </List>
        </Drawer>

        {/* Logo / Brand Name */}
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button color="secondary">QSchool Sports</Button>
        </NavLink>

        {/* Navigation & Auth Buttons (Hidden on Small Screens) */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2, alignItems: "center" }}>
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
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                <Button color="secondary">About</Button>
              </NavLink>
              <NavLink to="/case-studies" style={{ textDecoration: "none" }}>
                <Button color="secondary">Case Studies</Button>
              </NavLink>
              <NavLink to="/contact-us" style={{ textDecoration: "none" }}>
                <Button color="secondary">Contact Us</Button>
              </NavLink>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#ADFF2F" }}>
                {currentUser.username || currentUser.name || currentUser.email}
              </Typography>
              <Button variant="contained" color="secondary" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
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
