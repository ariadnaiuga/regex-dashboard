import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { DialogType } from "@/app/types";
import { RegexForm } from "../RegexForm";
import { useState } from "react";

interface RegexDialogProps {
  description: string;
  pattern: string;
  dialogType: DialogType;
  open: boolean;
  handleClose: () => void;
  handleSave: () => void;
  setDescription: (value: string) => void;
  setPattern: (value: string) => void;
}
export const RegexDialog: React.FC<RegexDialogProps> = ({
  description,
  pattern,
  open,
  dialogType,
  handleClose,
  handleSave,
  setDescription,
  setPattern,
}) => {
  const dialogTitle = dialogType === "edit" ? "Edit regex" : "Add regex";
  const [isFormValid, setisFormValid] = useState<boolean>(true);

  const onSaveClick = () => {
    handleSave();
    handleClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="regex-dialog-title"
      open={open}
      fullWidth
      keepMounted={false}
    >
      <DialogTitle>{dialogTitle}</DialogTitle>
      <IconButton
        aria-label="close regex dialog"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <RegexForm
          description={description}
          pattern={pattern}
          setDescription={setDescription}
          setPattern={setPattern}
          isFormValid={isFormValid}
          setisFormValid={setisFormValid}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">
          Cancel
        </Button>
        <Button
          onClick={onSaveClick}
          color="success"
          disabled={!isFormValid || description == "" || pattern == ""}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
