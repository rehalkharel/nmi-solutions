// src/EngineeringSolutionsPage.jsx
import React from 'react';
import { Container, Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const engineeringDetails = [
  {
    title: "2D & 3D Drafting",
    description: "Expert AutoCAD, Civil 3D & SolidWorks for precise drawings."
  },
  {
    title: "BIM & Architectural Design",
    description: "Comprehensive 3D modeling and documentation with Revit."
  },
  {
    title: "Construction Docs & Detailing",
    description: "Detailed plans, elevations, sections & specs."
  },
  {
    title: "Structural & MEP Support",
    description: "Innovative load calculations and MEP drafting solutions."
  },
  {
    title: "Cost-Benefit & Feasibility",
    description: "Optimized budgeting, ROI evaluations & risk analysis."
  },
  {
    title: "Project Management & Collaboration",
    description: "End-to-end support from concept to documentation."
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

export default function EngineeringSolutionsPage() {
  return (
    <motion.div initial="hidden" animate="visible" transition={{ duration: 1 }}>
      <Container maxWidth="lg" sx={{ my: 4 }}>
        {/* Hero Section with Updated Wording */}
        <Box
          sx={{
            p: 6,
            mb: 4,
            borderRadius: 2,
            textAlign: "center",
            background: "linear-gradient(135deg, #2c3e50, #4ca1af)",
            color: "#fff",
            boxShadow: 3
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            Engineering Excellence
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontStyle: "italic", mb: 2 }}>
            Innovate. Optimize. Transform.
          </Typography>
          <Typography variant="body1">
            Transform your projects with our cutting-edge engineering outsourcing services.
            Our experts and advanced tools drive efficiency and innovation across all disciplines.
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
                {engineeringDetails.map((item, index) => (
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
                src="/es1.jpeg"
                alt="Engineering Solution 1"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 20px rgba(0,0,0,0.3)" }}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
              />
              <motion.img
                src="/es2.jpeg"
                alt="Engineering Solution 2"
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
            Whether it’s civil projects, mechanical designs, or architectural modeling, our specialized teams deliver excellence at every stage.
            Partner with us to drive your engineering projects forward.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
}
