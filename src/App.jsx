// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Typography, Grid, Card, CardContent, Button, Box } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import SecurityIcon from "@mui/icons-material/Security";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SupportIcon from "@mui/icons-material/Support";

// Import pages
import FinancialMortgageServicesPage from "./FinancialMortgageServicesPage";
import EngineeringSolutionsPage from "./EngineeringSolutionsPage";
import DataScienceAIPage from "./DataScienceAIPage";
import CustomerServicesPage from "./CustomerServicesPage";
import ContactUsPage from "./ContactUsPage";

const services = [
  {
    icon: <PaymentIcon sx={{ fontSize: 50, color: "#4CAF50" }} />,
    title: "Data Science/AI",
    description: "Secure, reliable data solutions.",
    link: "/data-science-ai"
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 50, color: "#FF9800" }} />,
    title: "Customer Services",
    description: "Dedicated support for client satisfaction.",
    link: "/customer-services"
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 50, color: "#2196F3" }} />,
    title: "Engineering Solutions",
    description: "Expert engineering for global projects.",
    link: "/engineering-solutions"
  },
  {
    icon: <SupportIcon sx={{ fontSize: 50, color: "#E91E63" }} />,
    title: "Mortgage & Financial Services",
    description: "Comprehensive mortgage processing & advisory.",
    link: "/mortgage-services"
  }
];

function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Hero Section with Background GIF */}
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          mb: 6,
          p: 6,
          background: `url('/nmi_solutions_gif.gif') no-repeat center center, linear-gradient(135deg, rgba(15,32,39,0.8), rgba(32,58,67,0.8), rgba(44,83,100,0.8))`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          color: "#fff",
          borderRadius: 2,
          boxShadow: 3
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: "3.5rem", letterSpacing: "2px" }}
        >
          Welcome to <span style={{ color: "#4CAF50", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>NMI Solutions</span>
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          sx={{ fontStyle: "italic", opacity: 0.9 }}
        >
          Empowering businesses with expert outsourcing solutions.
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ mt: 3, fontSize: "1.2rem", fontWeight: "bold" }}>
          Get Started
        </Button>
      </Box>

      {/* Services Section */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Expertise
        </Typography>
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

      {/* Contact Us Button */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button component={Link} to="/contact" variant="contained" color="secondary" sx={{ fontWeight: "bold" }}>
          Contact Us
        </Button>
      </Box>
    </Container>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data-science-ai" element={<DataScienceAIPage />} />
        <Route path="/customer-services" element={<CustomerServicesPage />} />
        <Route path="/engineering-solutions" element={<EngineeringSolutionsPage />} />
        <Route path="/mortgage-services" element={<FinancialMortgageServicesPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}
