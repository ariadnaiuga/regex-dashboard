import React from "react";
import Alert from "@mui/material/Alert";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

interface CustomAlertProps {
  message: string;
}
export const CustomAlert: React.FC<CustomAlertProps> = ({ message }) => {
  return (
    <Alert icon={<WarningAmberIcon fontSize="inherit" />} severity="warning">
      {message}
    </Alert>
  );
};
