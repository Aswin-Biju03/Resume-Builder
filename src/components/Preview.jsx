import React from "react";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";

function Preview() {
  return (
    <div className=" w-100">
      <h2>FullName</h2>
      <p className="fs-6">Phone: 9598624575</p>
      <p className="fs-6">Email: 9598624575</p>
      <p className="fs-6">
        LinkedIn: <a href="">url</a>
      </p>
      <p className="fs-6">
        GitHub: <a href="">url</a>
      </p>
      <p className="fs-6">Location: location</p>
      <Divider className="bg-dark" />
      <h4 className="mt-3">Professional Summary</h4>
      <p>summary</p>
      <Divider className="bg-dark" />
      <h4 className="mt-3">Technical Skills</h4>
      <Button variant="text-dark">Text</Button>
      <Divider className="bg-dark my-3" />
      <h4>Education</h4>
      <p className="fs-6">
        Bachelors Degree in <b>degree</b>
      </p>
      <p className="fs-6">University/College Name</p>
      <p className="fs-6">Year of Graduation</p>
    </div>
  );
}

export default Preview;
