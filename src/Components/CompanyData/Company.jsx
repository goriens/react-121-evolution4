import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCompany } from "../../Redux/CompanyData/action";
import { CompanyList } from "./CompanyList";

export const CompanyFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompany());
  }, []);
  return (
    <div>
      <CompanyList />
    </div>
  );
};
