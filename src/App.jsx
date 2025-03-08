// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Typography, Grid, Card, CardContent, Button, Box, Fade } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SecurityIcon from "@mui/icons-material/Security";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import DataUsageIcon from "@mui/icons-material/DataUsage";

// Import Contact Us page (make sure this file exists in src)
import ContactUsPage from "./ContactUsPage";

// Define the services array
const services = [
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 50, color: "#4CAF50" }} />,
    title: "Financial & Mortgage Services",
    description: "Comprehensive financial and mortgage solutions to drive business growth and secure your investments.",
    link: "/financial-mortgage-services"
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 50, color: "#FF9800" }} />,
    title: "Customer Services",
    description: "Dedicated support teams ensuring top-notch client satisfaction.",
    link: "/customer-services"
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 50, color: "#2196F3" }} />,
    title: "Engineering Solutions",
    description: "Expert engineering solutions for global projects.",
    link: "/engineering-solutions"
  },
  {
    icon: <DataUsageIcon sx={{ fontSize: 50, color: "#9C27B0" }} />,
    title: "Data Science & AI",
    description: "Leverage cutting-edge data science and AI to unlock insights and drive innovation.",
    link: "/data-science-ai"
  }
];

// Minimal definitions for the service pages
const FinancialMortgageServicesPage = () => (
  <Fade in={true} timeout={1000}>
    <Box sx={{ p: 4, background: "linear-gradient(45deg, #1e3c72, #2a5298)", minHeight: "80vh", color: "#fff", borderRadius: 2 }}>
      <Typography variant="h3" gutterBottom>Financial & Mortgage Services</Typography>
      <Typography variant="body1">
        Our comprehensive financial and mortgage solutions are designed to drive business growth and secure your investments.
      </Typography>
      <Button variant="contained" color="secondary" component={Link} to="/" sx={{ mt: 3 }}>Back Home</Button>
    </Box>
  </Fade>
);

const CustomerServicesPage = () => (
  <Fade in={true} timeout={1000}>
    <Box sx={{ p: 4, background: "linear-gradient(45deg, #ff8a00, #e52e71)", minHeight: "80vh", color: "#fff", borderRadius: 2 }}>
      <Typography variant="h3" gutterBottom>Customer Services</Typography>
      <Typography variant="body1">
        Our customer services team is dedicated to ensuring top-notch support and satisfaction.
      </Typography>
      <Button variant="contained" color="secondary" component={Link} to="/" sx={{ mt: 3 }}>Back Home</Button>
    </Box>
  </Fade>
);

const EngineeringSolutionsPage = () => (
  <Fade in={true} timeout={1000}>
    <Box sx={{ p: 4, background: "linear-gradient(45deg, #0f2027, #203a43, #2c5364)", minHeight: "80vh", color: "#fff", borderRadius: 2 }}>
      <Typography variant="h3" gutterBottom>Engineering Solutions</Typography>
      <Typography variant="body1">
        We offer expert engineering solutions for global projects.
      </Typography>
      <Button variant="contained" color="secondary" component={Link} to="/" sx={{ mt: 3 }}>Back Home</Button>
    </Box>
  </Fade>
);

const DataScienceAIPage = () => (
  <Fade in={true} timeout={1000}>
    <Box sx={{ p: 4, background: "linear-gradient(45deg, #283048, #859398)", minHeight: "80vh", color: "#fff", borderRadius: 2 }}>
      <Typography variant="h3" gutterBottom>Data Science & AI</Typography>
      <Typography variant="body1">
        Unlock the power of data with our cutting-edge data science and AI solutions.
      </Typography>
      <Button variant="contained" color="secondary" component={Link} to="/" sx={{ mt: 3 }}>Back Home</Button>
    </Box>
  </Fade>
);

export default function App() {
  return (
    <Router>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section with a background GIF */}
                <Box
                  sx={{
                    textAlign: "center",
                    mb: 6,
                    p: 6,
                    background: `url('/nmi_solutions_gif.gif') no-repeat center center, linear-gradient(135deg, rgba(15,32,39,0.8), rgba(32,58,67,0.8), rgba(44,83,100,0.8))`,
                    backgroundBlendMode: "overlay",
                    backgroundSize: "cover",
                    color: "#fff",
                    borderRadius: 2,
                    boxShadow: 3,
                    animation: "pulse 2s infinite alternate"
                  }}
                >
                  <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                      letterSpacing: "2px"
                    }}
                  >
                    Welcome to <span style={{ color: "#4CAF50", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>NMI Solutions</span>
                  </Typography>
                  <Typography variant="h5" component="p" gutterBottom sx={{ fontStyle: "italic", opacity: 0.9 }}>
                    Empowering businesses with expert outsourcing solutions.
                  </Typography>
                  <Button variant="contained" color="secondary" size="large" sx={{ mt: 3, fontSize: "1.2rem", fontWeight: "bold" }}>
                    Get Started
                  </Button>
                  <Box sx={{ mt: 4 }}>
                    <Button variant="outlined" color="primary" component={Link} to="/contact">
                      Contact Us
                    </Button>
                  </Box>
                </Box>
                {/* Services Section */}
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h4" component="h2" gutterBottom>Our Expertise</Typography>
                  <Grid container spacing={4}>
                    {services.map((service, index) => (
                      <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                          sx={{
                            minHeight: 300,
                            textAlign: "center",
                            transition: "0.3s",
                            "&:hover": {
                              transform: "scale(1.05)",
                              boxShadow: "0px 4px 20px rgba(0,0,0,0.2)"
                            }
                          }}
                        >
                          <CardContent>
                            <Box sx={{ mb: 2 }}>{service.icon}</Box>
                            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: "bold" }}>
                              {service.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, opacity: 0.85 }}>
                              {service.description}
                            </Typography>
                            <Button component={Link} to={service.link} variant="outlined" color="primary" sx={{ fontWeight: "bold" }}>
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </>
            }
          />
          <Route path="/financial-mortgage-services" element={<FinancialMortgageServicesPage />} />
          <Route path="/customer-services" element={<CustomerServicesPage />} />
          <Route path="/engineering-solutions" element={<EngineeringSolutionsPage />} />
          <Route path="/data-science-ai" element={<DataScienceAIPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </Container>
      <style>
        {`
          @keyframes pulse {
            from { box-shadow: 0 0 10px rgba(255,255,255,0.3); }
            to { box-shadow: 0 0 20px rgba(255,255,255,0.7); }
          }
        `}
      </style>
    </Router>
  );
}
