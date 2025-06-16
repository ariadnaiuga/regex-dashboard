# Project description

This dashboard aims to parse a dynamic text and extract the terms that match a specific pattern.

## Features

- Left panel
  -Toggle between:

  - Edit mode:
    - delete regex patterns
    - add/edit existing regex pattern with validation
    - view existing regex patterns
  - Approval mode
    - select an existing regex pattern
    - view the matching terms extracted from a dynamic text
    - approve a regex pattern
    - decline a regex pattern

- Right panel:
  - view/edit the dynamic text
  - generate a new text

## Architecture

/components isolated UI components
/context holds the global state for regex patterns and the text
/helpers helper functions for regex validation and extraction logic

## Assumptions

- if a regex is approved => all the terms are approved

## Future imporovements

- highlight extracted terms in the text
- approve/decline specific extracted terms
- import document feature
- UI/UX design imporovements
- unit and integration tests

## Getting Started

Clone the project and install the dependencies

```bash
git@github.com:ariadnaiuga/regex-dashboard.git
npm install
```

Run the development server:

```bash
npm run dev
```

Run the tests:

```bash
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
