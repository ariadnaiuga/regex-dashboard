import React from "react";
import { Box } from "@mui/material";
import { FilteredRegexTermsListItem } from "./FilteredRegexTermsListItem";
import styles from "./styles.module.css";

interface FilteredTermsProps {
  terms: string[];
  isRegexApproved: boolean;
}
export const FilteredRegexTerms: React.FC<FilteredTermsProps> = ({
  terms,
  isRegexApproved,
}) => {
  return (
    <Box className={styles.listContainer}>
      {terms.map((item, index) => (
        <FilteredRegexTermsListItem
          term={item}
          approved={isRegexApproved}
          key={`filtered-term-item-${index}`}
        />
      ))}
    </Box>
  );
};
