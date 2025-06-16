import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";

interface ApprovalModeActionsProps {
  isApproved: boolean;
  handleDecline: () => void;
  handleApprove: () => void;
}
export const ApprovalModeActions: React.FC<ApprovalModeActionsProps> = ({
  isApproved,
  handleDecline,
  handleApprove,
}) => {
  return (
    <Box className={styles.container}>
      {isApproved ? (
        <Button variant="contained" onClick={handleDecline} color="error">
          Decline
        </Button>
      ) : (
        <Button color="success" variant="contained" onClick={handleApprove}>
          Approve
        </Button>
      )}
    </Box>
  );
};
