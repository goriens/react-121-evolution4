import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Company } from "../Pages/Company";
import { Employees } from "./../Pages/Employees";
import { Employee } from "../Pages/Employee";

export const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/employee" element={<Employees />} />
        <Route path="/employee/:id" element={<Employee />} />
      </Routes>
    </Box>
  );
};
