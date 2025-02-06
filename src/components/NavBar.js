import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = ({ handleLoginOpen, handleSignUpOpen, isModalClosed }) => {
  const { currentUser, logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "rgba(0,0,0,0.7)", boxShadow: "none", padding: "0em 1em" }}
    >
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

        {/* Desktop Navigation & Auth Buttons (Hidden on Small Screens) */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2, alignItems: "center" }}>
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            <Button color="secondary">About</Button>
          </NavLink>
          <NavLink to="/case-studies" style={{ textDecoration: "none" }}>
            <Button color="secondary">Case Studies</Button>
          </NavLink>
          <NavLink to="/contact-us" style={{ textDecoration: "none" }}>
            <Button color="secondary">Contact Us</Button>
          </NavLink>

          {currentUser ? (
            <>
              <AnimatePresence>
                {isModalClosed && (
                  <motion.div
                    key="welcome-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontSize: ".7em", fontWeight: "normal", textTransform: "Uppercase", color: "rgba(235, 232, 240, 0.9)", textAlign: "center" }}
                    >
                      Welcome back <Typography variant="body1" sx={{ textTransform: "Uppercase", fontWeight: "bold", textAlign: "center" }}>✺ {currentUser.username || currentUser.name || currentUser.email} ✺</Typography>
                    </Typography>
                  </motion.div>
                )}
              </AnimatePresence>
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
