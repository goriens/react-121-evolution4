import {
  Box,
  Button,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { CompanyInput } from "../Components/CompanyData/CompanyInput";
import { CompanyList } from "../Components/CompanyData/CompanyList";

export const Company = () => {
  return (
    <Box width="20rem" margin="auto">
      <Typography variant="h5" backgroundColor="gray">
        Companies DropDown
      </Typography>
      <Stack>
        <CompanyList />
      </Stack>
      <Box mt={"3rem"}>
        <CompanyInput />
      </Box>
    </Box>
  );
};
