"use client";

import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import styles from "../styles.module.css";

interface RegexListItemProps {
  term: string;
  approved: boolean;
}
export const FilteredRegexTermsListItem: React.FC<RegexListItemProps> = ({
  term,
  approved,
}) => {
  return (
    <Box className={styles.listItemContainer}>
      <Typography>{term}</Typography>
      <Chip
        label={approved ? "Approved" : "Not approved"}
        color={approved ? "success" : "default"}
      />
    </Box>
  );
};
