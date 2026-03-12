import React, { useState } from "react";
import UserInput from "../components/UserInput";
import Preview from "../components/Preview";

function UserForm() {
  const [resumeData, setResumeData] = useState({
    fullname: "",
    location: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    degree: "",
    university: "",
    passOut: "",
    skills: [],
    summary: "",
  });
  return (
    <div className="container">
      <div className="row my-5 ">
        <div className="col-lg-6">
          <UserInput resumeData={resumeData} setResumeData={setResumeData} />
        </div>
        <div className="col-lg-6">
         { resumeData.fullname && <Preview  resumeData={resumeData}/>}
        </div>
      </div>
    </div>
  );
}

export default UserForm;
