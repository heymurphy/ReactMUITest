import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import theme from "./theme";
import LayoutWrapper from "./components/LayoutWrapper";
import DenseTable from "./components/DenseTable";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChartSamples from "./components/ChartSamples";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AnimatePresence } from "framer-motion"; // ✅ Ensures smooth modal animations

const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", paddingBottom: "2rem" }}>
        {/* ✅ Passes the functions to NavBar */}
        <NavBar handleLoginOpen={handleLoginOpen} handleSignUpOpen={handleSignUpOpen} /> 

        <Container>
          <LayoutWrapper>
            {/* Header Section */}
            <Typography
              variant="h1"
              sx={{
                mt: 2,
                color: theme.palette.secondary.main,
                textAlign: "center",
              }}
            >
              QSchool Sports Technology
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mt: 2,
                color: theme.palette.secondary.main,
                textAlign: "center",
                paddingBottom: "1em",
              }}
            >
              We have a full range of software to support your business.
            </Typography>

            {/* Chart Section */}
            <ChartSamples />

            {/* Info Cards Section */}
            <Grid container spacing={3} sx={{ mt: 4, alignItems: "stretch", minHeight: "200px" }}>
              {[
                {
                  title: "Streamline Retail",
                  description:
                    "Our solution simplifies retail operations for sports businesses. From inventory tracking to customer engagement, we provide seamless integration.",
                },
                {
                  title: "Accelerate Profits",
                  description:
                    "Increase revenue with data-driven decision-making tools. Our platform enables real-time tracking of financial metrics.",
                },
                {
                  title: "Success Stories",
                  description:
                    "Discover how our clients have transformed their businesses. Real-life case studies showcase the impact of our technology.",
                },
                {
                  title: "Innovate Solutions",
                  description:
                    "Our platform provides cutting-edge technology to streamline business operations. Leverage automation, real-time analytics, and predictive insights.",
                },
              ].map((card, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(15, 2, 40, 0.3), rgba(83, 16, 172, 0.3), rgba(199, 28, 205, 0.3), rgba(192, 241, 162, 0.1), rgba(2, 0, 4, 0.3))",
                      borderRadius: 2,
                      boxShadow: 3,
                      color: "#F5F5F5",
                      p: 2,
                    }}
                  >
                    <CardContent sx={{ minHeight: "300px" }}>
                      <Typography variant="h6" color="secondary">
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        sx={{ pt: 2 }}
                      >
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Data Table Section */}
            <Box
              sx={{
                mt: 5,
                p: 3,
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                boxShadow: 3,
                width: "100%",
                maxWidth: "900px",
                margin: "1.5em auto 1.5em auto",
              }}
            >
              <Typography variant="h4" color="secondary" gutterBottom>
                Competitive Analysis
              </Typography>
              <DenseTable />
            </Box>

            <Contact />
            <Footer />
          </LayoutWrapper>
        </Container>
      </Box>

      {/* ✅ Login & Sign Up Modals with Smooth Animation */}
      <AnimatePresence>
        {loginOpen && <Login onClose={handleLoginClose} />}
        {signUpOpen && <SignUp onClose={handleSignUpClose} />} 
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Home;
