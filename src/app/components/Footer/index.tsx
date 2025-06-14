import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="caption">
        {new Date().getFullYear()} Regex Dashboard
      </Typography>
    </Box>
  );
};
