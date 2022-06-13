import React from "react";
import { EmployeeInput } from "../Components/EmployeeData/EmployeeInput";
import { EmployeeList } from "../Components/EmployeeData/EmployeeList";

export const Employees = () => {
  return (
    <div>
      <EmployeeInput />
      <EmployeeList />
    </div>
  );
};
