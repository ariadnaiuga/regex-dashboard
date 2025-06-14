import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { LeftPanel } from "../LeftPanel";
import { RightPanel } from "../RightPanel";
import styles from "./styles.module.css";

export const HomePageContent = () => {
  return (
    <Box className={styles.container}>
      <Grid container spacing={5} height="100%">
        <Grid size={6} className={styles.grid}>
          <LeftPanel />
        </Grid>
        <Grid size={6} className={styles.grid}>
          <RightPanel />
        </Grid>
      </Grid>
    </Box>
  );
};
