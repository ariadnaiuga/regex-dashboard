import React, { useState } from "react";
import { Box } from "@mui/material";
import { useRegexDashboardContext } from "@/app/context/RegexDashboardContext";
import { RegexListItem } from "./RegexListItem";
import { RegexDialog } from "../RegexDialog";
import styles from "./styles.module.css";
import { CustomAlert } from "@/app/components/shared/CustomAlert";

export const RegexList = () => {
  const { regExpressions, setRegExpressions } = useRegexDashboardContext();

  const [isRegexDialogOpen, setisRegexDialogOpen] = useState(false);

  const [newDescription, setNewDescription] = useState<string>("");
  const [newPattern, setNewPattern] = useState<string>("");
  const [regexToUpdateIndex, setRegexToUpdateIndex] = useState<number>();

  const handleEdit = (index: number, description: string, pattern: string) => {
    setisRegexDialogOpen(true);
    setNewDescription(description);
    setNewPattern(pattern);
    setRegexToUpdateIndex(index);
  };

  const handleSave = () => {
    const newRegExpressions = regExpressions.map((item, index) =>
      index === regexToUpdateIndex
        ? {
            ...item,
            description: newDescription,
            pattern: newPattern,
          }
        : item
    );
    setRegExpressions(newRegExpressions);
    setisRegexDialogOpen(false);
  };

  const handleDelete = (index: number) => {
    const newRegExpressions = regExpressions.filter(
      (_, itemIndex) => itemIndex !== index
    );
    setRegExpressions(newRegExpressions);
    setisRegexDialogOpen(false);
  };

  return (
    <Box className={styles.listContainer}>
      {regExpressions.map((item, index) => (
        <Box key={`regex-list-item-${index}`}>
          <RegexListItem
            description={item.description}
            handleDelete={() => {
              handleDelete(index);
            }}
            handleEdit={() => {
              handleEdit(index, item.description, item.pattern);
            }}
          />
        </Box>
      ))}
      {regExpressions.length === 0 && (
        <CustomAlert message="There are no regular expressions available." />
      )}
      <RegexDialog
        description={newDescription}
        pattern={newPattern}
        setDescription={setNewDescription}
        setPattern={setNewPattern}
        handleClose={() => {
          setisRegexDialogOpen(false);
        }}
        open={isRegexDialogOpen}
        dialogType="edit"
        handleSave={handleSave}
      />
    </Box>
  );
};
