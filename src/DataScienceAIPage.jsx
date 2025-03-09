// src/DataScienceAIPage.jsx
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

const dataScienceDetails = [
  {
    title: "Data Analytics & Visualization",
    description: "Transform raw data into actionable insights with interactive dashboards."
  },
  {
    title: "Machine Learning Models",
    description: "Develop, train, and deploy robust predictive models."
  },
  {
    title: "Big Data Processing",
    description: "Leverage scalable solutions for processing vast data sets."
  },
  {
    title: "Predictive & Prescriptive Analytics",
    description: "Anticipate trends and optimize decisions using advanced algorithms."
  },
  {
    title: "Data Engineering & ETL",
    description: "Build and maintain clean, reliable data pipelines."
  },
  {
    title: "Cloud Data Solutions",
    description: "Flexible, secure storage and processing on leading cloud platforms."
  },
  {
    title: "AI-driven Automation",
    description: "Streamline operations with intelligent automation tools."
  },
  {
    title: "Natural Language Processing",
    description: "Extract meaningful insights from unstructured text."
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

export default function DataScienceAIPage() {
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
            background: "linear-gradient(135deg, #1f4037, #99f2c8)",
            color: "#fff",
            boxShadow: 3
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            Data Science & AI
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontStyle: "italic", mb: 2 }}>
            Unlock the Power of Data
          </Typography>
          <Typography variant="body1">
            Harness advanced analytics and cutting-edge AI to transform data into strategic insights.
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
                {dataScienceDetails.map((item, index) => (
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
          {/* Right Column: Animated Stock Images */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <motion.img
                src="/ds1.jpeg"
                alt="Data Science & AI 1"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 20px rgba(0,0,0,0.3)" }}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
              />
              <motion.img
                src="/ds2.jpeg"
                alt="Data Science & AI 2"
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
            Partner with us to convert data into actionable insights, streamline your operations, and drive innovation across your business.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
}
