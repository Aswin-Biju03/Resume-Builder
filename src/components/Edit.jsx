import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaEdit } from "react-icons/fa";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FaXmark } from "react-icons/fa6";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Edit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="btn text-secondary fs-2 me-2" onClick={handleOpen}>
        <FaEdit />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <h3>Personal Details</h3>
              <div className="p-3 row">
                <TextField
                  id="standard-basic-name"
                  label="Full Name"
                  variant="standard"
                />
                <TextField
                  id="standard-basic-loc"
                  label="Location"
                  variant="standard"
                />
                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">
                    Choose Job Title
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <h3>Contact Details</h3>
              <div className="p-3 row">
                <TextField
                  id="standard-basic-name-email"
                  label="Email"
                  variant="standard"
                />
                <TextField
                  id="standard-basic-phone"
                  label="Contact Number"
                  variant="standard"
                />
                <TextField
                  id="standard-basic-linkedin"
                  label="Linkedin Link"
                  variant="standard"
                />
                <TextField
                  id="standard-basic-github"
                  label="GitHub Link"
                  variant="standard"
                />
              </div>
            </div>
            <div>
              <h3>Educational Details</h3>
              <div className="p-3 row">
                <TextField
                  id="standard-basic-name-email"
                  label="Bachelors Degree"
                  variant="standard"
                />
                <TextField
                  id="standard-basic-phone"
                  label="University / College Name"
                  variant="standard"
                />
                <TextField
                  id="standard-basic-linkedin"
                  label="Year of Graduation"
                  variant="standard"
                />
              </div>
            </div>
            <div>
              <h3>Skills</h3>
              <div className="p-3 d-flex align-items-center justify-content-between">
                <input
                  variant="text"
                  placeholder="Add Skill"
                  className="form-control"
                />
                <Button variant="text">Add</Button>
              </div>
              <h5>Added Skills: </h5>
              <div className="p-3 d-flex align-items-center justify-content-between">
                <Button variant="contained" className="my-1">
                  Skill <FaXmark className="ms-1" />
                </Button>
              </div>
            </div>
            <div>
              <h3>Summary</h3>
              <div className="p-3 row">
                <TextField
                  id="standard-basic-degree"
                  label="summary"
                  multiline
                  variant="standard"
                />
              </div>
            </div>
            <button className="btn btn-primary">Update</button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
export default Edit;
