import React from "react";
import { Box, Button } from "@mui/material";
import { RegexDialog } from "../RegexDialog";
import { RegExpInterface } from "@/app/types";
import { useRegexDashboardContext } from "@/app/context/RegexDashboardContext";
import styles from "./styles.module.css";

export const AddRegex = () => {
  const { regExpressions, setRegExpressions } = useRegexDashboardContext();
  const [isRegexDialogOpen, setisRegexDialogOpen] = React.useState(false);
  const [newDescription, setNewDescription] = React.useState<string>("");
  const [newPattern, setNewPattern] = React.useState<string>("");

  const handleSave = () => {
    const newRegex: RegExpInterface = {
      description: newDescription,
      pattern: newPattern,
      approved: false,
    };
    setRegExpressions([...regExpressions, newRegex]);
  };

  const toggleRegexDialog = () => {
    setNewDescription("");
    setNewPattern("");
    setisRegexDialogOpen(!isRegexDialogOpen);
  };

  return (
    <Box className={styles.container}>
      <Button variant="contained" onClick={toggleRegexDialog}>
        Add new regex
      </Button>

      <RegexDialog
        description={newDescription}
        pattern={newPattern}
        setDescription={setNewDescription}
        setPattern={setNewPattern}
        handleSave={handleSave}
        handleClose={toggleRegexDialog}
        open={isRegexDialogOpen}
        dialogType="add"
      />
    </Box>
  );
};
