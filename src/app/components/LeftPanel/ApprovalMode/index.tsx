import React, { useEffect, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useRegexDashboardContext } from "@/app/context/RegexDashboardContext";
import { CustomAlert } from "../../shared/CustomAlert";
import { getFilteredTerms } from "@/app/helpers/getFilteredTerms";
import { FilteredRegexTerms } from "./FilteredRegexTermsList";
import { ApprovalModeActions } from "./ApprovalModeActions";
import Box from "@mui/material/Box";
import styles from "./styles.module.css";

export const ApprovalMode = () => {
  const { regExpressions, text, setRegExpressions } =
    useRegexDashboardContext();

  const [selectedRegex, setSelectedRegex] = useState<string>("");
  const [isRegexApproved, setIsRegexApproved] = useState<boolean>(false);
  const [filteredTerms, setFilteredTerms] = useState<string[]>([]);

  const updateFilteredTerms = (pattern: string) => {
    if (pattern !== "") {
      const terms = getFilteredTerms(pattern, text);
      setFilteredTerms(terms);
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    const selection = event.target.value;
    setSelectedRegex(selection);

    const isApproved =
      regExpressions.find((item) => item.pattern === selection)?.approved ||
      false;
    updateFilteredTerms(selection);

    setIsRegexApproved(isApproved);
  };

  const updateRegexApprovedField = (approved: boolean) => {
    const newRegex = regExpressions.map((item) =>
      item.pattern === selectedRegex ? { ...item, approved } : item
    );
    setRegExpressions(newRegex);
    setIsRegexApproved(approved);
  };

  const handleApprove = () => {
    updateRegexApprovedField(true);
  };

  const handleDecline = () => {
    updateRegexApprovedField(false);
  };

  useEffect(() => {
    updateFilteredTerms(selectedRegex);
  }, [text, selectedRegex]);

  return (
    <Box className={styles.container} data-testid="approval-mode">
      <Box className={styles.formContainer}>
        <FormControl fullWidth>
          <InputLabel id="relect-regex-label">Select regex</InputLabel>
          <Select
            labelId="relect-regex-label"
            id="select-regex"
            value={selectedRegex}
            label="Select regex"
            onChange={handleChange}
            disabled={regExpressions.length === 0}
          >
            {regExpressions.map((item, index) => (
              <MenuItem value={item.pattern} key={`select-regex-item-${index}`}>
                {item.description}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {regExpressions.length === 0 && (
          <CustomAlert message="There are no regular expressions available." />
        )}

        {filteredTerms.length === 0 && selectedRegex !== "" && (
          <CustomAlert message="There are no terms that match the selected regex." />
        )}
      </Box>
      <FilteredRegexTerms
        terms={filteredTerms}
        isRegexApproved={isRegexApproved}
      />
      {selectedRegex !== "" && (
        <ApprovalModeActions
          isApproved={isRegexApproved}
          handleApprove={handleApprove}
          handleDecline={handleDecline}
        />
      )}
    </Box>
  );
};
