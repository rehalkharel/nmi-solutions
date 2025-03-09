// src/FinancialMortgageServicesPage.jsx
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

// Service details (concise)
const servicesDetails = [
  { title: "Loan Origination & Underwriting", description: "Efficient processing & risk assessment." },
  { title: "Loan Processing & Pre-Underwriting", description: "Quick document checks & eligibility." },
  { title: "Mortgage Servicing & Post-Closing", description: "Seamless payment & reporting." },
  { title: "Compliance & Quality Control", description: "Rigorous audits & regulation adherence." },
  { title: "Financial Analysis & Reporting", description: "Budgeting, forecasting & insights." },
  { title: "Accounts Support", description: "Streamlined invoice & vendor management." },
  { title: "Customer & Back-Office Support", description: "Responsive call center & data handling." },
  { title: "Technology & Data Management", description: "Secure automation & BI tools." }
];

// Framer Motion variants for sequential animation
const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

export default function FinancialMortgageServicesPage() {
  return (
    <motion.div initial="hidden" animate="visible" transition={{ duration: 1 }}>
      <Container maxWidth="lg" sx={{ my: 4 }}>
        {/* Hero Section */}
        <Box
          sx={{
            p: 6,
            mb: 4,
            borderRadius: 2,
            textAlign: "center",
            background: "linear-gradient(135deg, #1e3c72, #2a5298)",
            color: "#fff",
            boxShadow: 3,
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Animated dark overlay */}
          <motion.div
            animate={{ opacity: [0.5, 0.6, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)"
            }}
          />
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
              Mortgage & Financial Services
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ fontStyle: "italic", mb: 2 }}>
              Streamlined. Efficient. Compliant.
            </Typography>
            <Typography variant="body1">
              Empower your operations with our innovative outsourcing solutions.
            </Typography>
          </Box>
        </Box>

        {/* Main Content Section: Two Columns */}
        <Grid container spacing={4}>
          {/* Left Column: Services List */}
          <Grid item xs={12} md={7}>
            <Box sx={{ background: "#f5f5f5", p: 4, borderRadius: 2, boxShadow: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", mb: 2 }}>
                Our Services
              </Typography>
              <motion.div variants={listContainerVariants}>
                {servicesDetails.map((service, index) => (
                  <motion.div key={index} variants={listItemVariants}>
                    <ListItem sx={{ alignItems: "flex-start", py: 1 }}>
                      <ListItemIcon sx={{ minWidth: "35px", alignSelf: "center" }}>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={service.title}
                        secondary={service.description}
                        primaryTypographyProps={{ variant: "subtitle1", fontWeight: "bold" }}
                        secondaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </motion.div>
            </Box>
          </Grid>

          {/* Right Column: Animated Stock Images */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <motion.img
                src="/mf1.jpeg"
                alt="Mortgage Finance 1"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 20px rgba(0,0,0,0.3)" }}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.2 }}
              />
              <motion.img
                src="/mf2.jpeg"
                alt="Mortgage Finance 2"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 20px rgba(0,0,0,0.3)" }}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.2, delay: 0.3 }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Conclusion Section */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body1">
            Partner with us for expert teams, innovative technology, and streamlined workflows that drive sustainable growth.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
}
