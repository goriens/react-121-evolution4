import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEMPLOYEE } from "../../Redux/EmployeeData/action";

export const EmployeeList = () => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.EMPLOYEEReducer.EMPLOYEE);
  const loading = useSelector((state) => state.EMPLOYEEReducer.loading);
  const error = useSelector((state) => state.EMPLOYEEReducer.error);
  //  console.log("employee", employee);

  useEffect(() => {
    dispatch(getEMPLOYEE());
  }, []);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}

      <div className="main-show">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee Name</th>
              <th>Company Name</th>
              <th>CTC</th>
              <th>View Details</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {employee.map((e) => (
              <tr className="row" key={e.id}>
                <td className="first_name">{e.id}</td>
                <td className="last_name">{e.name}</td>
                <td className="email">{e.company}</td>
                <td className="gender">{e.salary}</td>
                <td className="age">
                  <Button>View</Button>
                </td>
                <td className="tenth_score">
                  <Button>Delete</Button>
                </td>
                <td className="twelth_score">
                  <Button>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
