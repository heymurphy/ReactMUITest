import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 5,
        py: 3,
        backgroundColor: "transparent", // Darker background
        color: "rgba(253, 249, 252, 0.6)",
        textAlign: "center",
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="center" textAlign={"center"}>
          {/* Column 1 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Company</Typography>
            <Link href="/about" color="inherit" display="block" underline="none">About Us</Link>
            <Link href="/careers" color="inherit" display="block" underline="none">Careers</Link>
            <Link href="/press" color="inherit" display="block" underline="none">Press</Link>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Resources</Typography>
            <Link href="/blog" color="inherit" display="block" underline="none">Blog</Link>
            <Link href="/faq" color="inherit" display="block" underline="none">FAQ</Link>
            <Link href="/support" color="inherit" display="block" underline="none">Support</Link>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Legal</Typography>
            <Link href="/privacy-policy" color="inherit" display="block" underline="none">Privacy Policy</Link>
            <Link href="/terms" color="inherit" display="block" underline="none">Terms of Service</Link>
            <Link href="/cookies" color="inherit" display="block" underline="none">Cookie Policy</Link>
          </Grid>
        </Grid>

        {/* Copyright Notice */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} QSchool Sports Tech. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
