import { TextField, Button, Stack, Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEMPLOYEE, getEMPLOYEE } from "../../Redux/EmployeeData/action";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "4px",
};

export function EmployeeInput() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddEmployee = () => {
    dispatch(
      addEMPLOYEE({
        name: name,
        company: company,
        email: email,
        phone: phone,
        salary: salary,
      })
    ).then(() => {
      setText("");
      dispatch(getEMPLOYEE());
    });
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen} sx={{ margin: "2rem" }}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Employee
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Stack spacing={2} width={"auto"} margin="auto">
              <TextField
                id="outlined-basic"
                label="EMPLOYEE NAME"
                variant="outlined"
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="COMPANY"
                variant="outlined"
                size="small"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="EMAIL"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="PHONE"
                variant="outlined"
                size="small"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="SALARY"
                variant="outlined"
                size="small"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
              <Button variant="contained" onClick={handleAddEmployee}>
                ADD
              </Button>
            </Stack>
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
