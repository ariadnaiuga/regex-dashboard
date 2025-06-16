"use client";

import React, { useState } from "react";
import { Mode } from "@/app/types";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { EditMode } from "./EditMode";
import { ApprovalMode } from "./ApprovalMode";
import Box from "@mui/material/Box";
import styles from "./styles.module.css";

export const LeftPanel = () => {
  const [mode, setMode] = useState<Mode>("edit");

  const handleToggleMode = (
    event: React.MouseEvent<HTMLElement>,
    newMode: Mode
  ) => {
    setMode(newMode);
  };

  return (
    <Box className={styles.container}>
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleToggleMode}
        aria-label="toggle mode"
        fullWidth
      >
        <ToggleButton
          value="edit"
          aria-label="edit mode"
          color="primary"
          data-testid="edit-mode-button"
        >
          Edit Mode
        </ToggleButton>
        <ToggleButton
          value="approval"
          aria-label="approval mode"
          color="primary"
          data-testid="approval-mode-button"
        >
          Approval Mode
        </ToggleButton>
      </ToggleButtonGroup>
      {mode === "edit" ? <EditMode /> : <ApprovalMode />}
    </Box>
  );
};
