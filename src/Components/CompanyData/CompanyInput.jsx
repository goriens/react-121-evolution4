import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCompany, getCompany } from "../../Redux/CompanyData/action";

export function CompanyInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddCompany = () => {
    dispatch(
      addCompany({
        title: text,
      })
    ).then(() => {
      setText("");
      dispatch(getCompany());
    });
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="ADD A NEW COMPANY"
        variant="outlined"
        size="small"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddCompany}>
        ADD
      </Button>
    </div>
  );
}
