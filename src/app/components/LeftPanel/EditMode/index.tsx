import React from "react";
import { Box } from "@mui/material";
import { AddRegex } from "./AddRegex";
import { RegexList } from "./RegexList";
import styles from "./styles.module.css";

export const EditMode = () => {
  return (
    <Box className={styles.container} data-testid="edit-mode">
      <RegexList />
      <AddRegex />
    </Box>
  );
};
