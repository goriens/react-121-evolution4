import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompany } from "../../Redux/CompanyData/action";

export const CompanyList = () => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.companyReducer.company);
  const loading = useSelector((state) => state.companyReducer.loading);
  const error = useSelector((state) => state.companyReducer.error);
  console.log("company", company);

  useEffect(() => {
    dispatch(getCompany());
  }, []);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {company.map((item) => (
        <div key={item.id}>
          <Typography variant="h5">
            {item.id} - {item.title}
          </Typography>
        </div>
      ))}
    </div>
  );
};
