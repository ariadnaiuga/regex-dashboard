import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h6">Regex Dashboard</Typography>
    </Box>
  );
};
