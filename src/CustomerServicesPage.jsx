// src/CustomerServicesPage.jsx
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
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const customerDetails = [
  {
    title: "Call Center & Support",
    description: "24/7 multi-channel support with skilled agents."
  },
  {
    title: "Client Relationship Management",
    description: "Proactive engagement and personalized service."
  },
  {
    title: "Complaint Resolution",
    description: "Efficient handling to resolve issues swiftly."
  },
  {
    title: "Feedback & Insights",
    description: "Actionable insights to enhance customer experience."
  },
  {
    title: "Technical Support",
    description: "Expert troubleshooting for fast issue resolution."
  },
  {
    title: "Order Processing & Follow-Up",
    description: "Streamlined order management and follow-up."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const imageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function CustomerServicesPage() {
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
            background: "linear-gradient(135deg, #0d47a1, #42a5f5)",
            color: "#fff",
            boxShadow: 3
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            Customer Services
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontStyle: "italic", mb: 2 }}>
            Connect. Engage. Delight.
          </Typography>
          <Typography variant="body1">
            Enhance your customer experience with our comprehensive support solutions.
          </Typography>
        </Box>

        {/* Two-Column Layout */}
        <Grid container spacing={4}>
          {/* Left Column: Animated Capabilities List */}
          <Grid item xs={12} md={7}>
            <Box sx={{ background: "#f5f5f5", p: 4, borderRadius: 2, boxShadow: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", mb: 2 }}>
                Our Capabilities
              </Typography>
              <motion.div variants={containerVariants}>
                {customerDetails.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <ListItem sx={{ alignItems: "flex-start", py: 1 }}>
                      <ListItemIcon sx={{ minWidth: "35px", alignSelf: "center" }}>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        secondary={item.description}
                        primaryTypographyProps={{ variant: "subtitle1", fontWeight: "bold" }}
                        secondaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </motion.div>
            </Box>
          </Grid>
          {/* Right Column: Animated Stock Photos */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <motion.img
                src="/cs1.jpeg"
                alt="Customer Service 1"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 20px rgba(0,0,0,0.3)" }}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
              />
              <motion.img
                src="/cs2.jpeg"
                alt="Customer Service 2"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 20px rgba(0,0,0,0.3)" }}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.3 }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Conclusion Section */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body1">
            Our dedicated teams and innovative tools ensure every customer interaction is a step toward lasting loyalty.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
}
