"use client";

import React, { useEffect } from "react";
import { useRegexDashboardContext } from "@/app/context/RegexDashboardContext";
import { generateText } from "@/app/helpers/generateText";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "./styles.module.css";

export const RightPanel = () => {
  const { text, setText } = useRegexDashboardContext();

  const generateNewText = () => {
    const generatedText = generateText();
    setText(generatedText);
  };

  useEffect(() => {
    generateNewText();
  }, []);

  return (
    <Box className={styles.container}>
      <textarea
        aria-label="text to match"
        placeholder="Type your text"
        defaultValue={text}
        className={styles.textarea}
      />
      <Box className={styles.buttonContainer}>
        <Button
          variant="contained"
          sx={{ width: "fit-content" }}
          onClick={generateNewText}
        >
          Generate new text
        </Button>
      </Box>
    </Box>
  );
};
