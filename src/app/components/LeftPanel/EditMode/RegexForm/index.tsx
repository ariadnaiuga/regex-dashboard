/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { isValidRegex } from "@/app/helpers/isValidRegex";
import styles from "./styles.module.css";

interface RegexFormProps {
  description?: string;
  pattern?: string;
  isFormValid: boolean;
  setisFormValid: (value: boolean) => void;
  setDescription: (value: string) => void;
  setPattern: (value: string) => void;
}

export const RegexForm: React.FC<RegexFormProps> = ({
  description = "",
  pattern = "",
  isFormValid,
  setDescription,
  setPattern,
  setisFormValid,
}) => {
  useEffect(() => {
    const isNewPatternValid = isValidRegex(pattern);
    setisFormValid(isNewPatternValid);
  }, [pattern]);

  return (
    <Box className={styles.container}>
      <TextField
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <TextField
        label="Pattern"
        variant="outlined"
        value={pattern}
        onChange={(e) => {
          setPattern(e.target.value);
        }}
        error={!isFormValid}
        helperText={isFormValid ? " " : "Please enter a valid regex"}
      />
    </Box>
  );
};
