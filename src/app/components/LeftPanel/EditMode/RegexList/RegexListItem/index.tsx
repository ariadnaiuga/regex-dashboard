"use client";

import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../styles.module.css";

interface RegexListItemProps {
  description: string;
  handleEdit: () => void;
  handleDelete: () => void;
}

export const RegexListItem: React.FC<RegexListItemProps> = ({
  description,
  handleEdit,
  handleDelete,
}) => {
  return (
    <Box className={styles.listItemContainer}>
      <Typography variant="body1">{description}</Typography>
      <Box>
        <IconButton onClick={handleEdit} color="primary">
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDelete} color="error">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
