"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
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
      <Typography color={approved ? "success" : "default"}>
        {approved ? "Approved" : "Not approved"}
      </Typography>
    </Box>
  );
};
