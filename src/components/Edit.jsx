import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import jobTypes from "../assets/jobRole.json";
import { FaEdit } from "react-icons/fa";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FaXmark } from "react-icons/fa6";
import { editResumeAPI } from "../services/allResumeAPIService";
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

function Edit({ resumeData, setResumeData }) {
  const skillRef = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(resumeData);

  const removeSkill = (skill) => {
    setResumeData({
      ...resumeData,
      skills: resumeData?.skills?.filter((item) => item != skill),
    });
  };

  const addSkill = (skill) => {
    if (skill) {
      if (
        resumeData?.skills
          ?.map((item) => item.toLowerCase())
          ?.includes(skill.toLowerCase())
      ) {
        alert("Given Skill Already Exists !! . Add new Skill");
      } else {
        setResumeData({
          ...resumeData,
          skills: [...resumeData?.skills, skill],
        });
      }
    } else {
      alert("Add valid input");
    }
  };

  const handleEditResume = async () => {
    const {
      fullname,
      location,
      job,
      email,
      phone,
      linkedin,
      github,
      degree,
      university,
      passOut,
      skills,
      summary,
    } = resumeData;

    if (
      fullname &&
      location &&
      job &&
      email &&
      phone &&
      linkedin &&
      github &&
      degree &&
      university &&
      passOut &&
      skills?.length > 0 &&
      summary
    ) {
      const response = await editResumeAPI(resumeData?.id, resumeData);
      console.log(response);
      if(response.status==200){
        alert("Resume updated Successfully")
        handleClose()
      }
    }else{
      alert("Please fill the form completely")
    }
  };
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
                  value={resumeData.fullname}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, fullname: e.target.value })
                  }
                  id="standard-basic-name"
                  label="Full Name"
                  variant="standard"
                />
                <TextField
                  value={resumeData.location}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, location: e.target.value })
                  }
                  id="standard-basic-loc"
                  label="Location"
                  variant="standard"
                />
                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">
                    Choose Job Title
                  </InputLabel>
                  <Select
                    value={resumeData.job}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Job"
                    onChange={(e) =>
                      setResumeData({ ...resumeData, job: e.target.value })
                    }
                  >
                    {jobTypes.jobRoles.map((role) => (
                      <MenuItem key={role} value={role}>
                        {role}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <h3>Contact Details</h3>
              <div className="p-3 row">
                <TextField
                  value={resumeData.email}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, email: e.target.value })
                  }
                  id="standard-basic-name-email"
                  label="Email"
                  variant="standard"
                />
                <TextField
                  value={resumeData.phone}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, phone: e.target.value })
                  }
                  id="standard-basic-phone"
                  label="Contact Number"
                  variant="standard"
                />
                <TextField
                  value={resumeData.linkedin}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, linkedin: e.target.value })
                  }
                  id="standard-basic-linkedin"
                  label="Linkedin Link"
                  variant="standard"
                />
                <TextField
                  value={resumeData.github}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, github: e.target.value })
                  }
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
                  value={resumeData.degree}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, degree: e.target.value })
                  }
                  id="standard-basic-name-email"
                  label="Bachelors Degree"
                  variant="standard"
                />
                <TextField
                  value={resumeData.university}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, university: e.target.value })
                  }
                  id="standard-basic-phone"
                  label="University / College Name"
                  variant="standard"
                />
                <TextField
                  value={resumeData.passOut}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, passOut: e.target.value })
                  }
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
                  ref={skillRef}
                  variant="text"
                  placeholder="Add Skill"
                  className="form-control"
                />
                <Button
                  onClick={() => {
                    addSkill(skillRef.current.value);
                  }}
                  variant="text"
                >
                  Add
                </Button>
              </div>
              <h5>Added Skills: </h5>
              <div className="p-3 d-flex justify-content-between flex-wrap">
                {resumeData?.skills?.map((skill) => (
                  <Button
                    onClick={() => {
                      removeSkill(skill);
                    }}
                    key={skill}
                    variant="contained"
                    className="my-1"
                  >
                    {skill} <FaXmark className="ms-1" />
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3>Summary</h3>
              <div className="p-3 row">
                <TextField
                  id="standard-basic-degree"
                  value={resumeData?.summary}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, summary: e.target.value })
                  }
                  label="summary"
                  multiline
                  variant="standard"
                />
              </div>
            </div>
            <button onClick={handleEditResume} className="btn btn-primary">
              Update
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
export default Edit;
