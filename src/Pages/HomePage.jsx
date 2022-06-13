import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <Box>
      <Typography variant="h3">HomePage</Typography>
      <Stack spacing={2} width="150px" margin="auto">
        <Button variant="contained">
          <Link to="/company">COMPANIES</Link>
        </Button>
        <Button variant="contained">
          <Link to="/employee">EMPLOYEES</Link>
        </Button>
      </Stack>
    </Box>
  );
};
