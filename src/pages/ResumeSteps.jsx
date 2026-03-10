import React from "react";
import { IoDocumentText } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function ResumeSteps() {
  return (
    <div className="my-5">
      <h1 className="text-center mb-5">
        Create a Job-Winning Resume in Minutes
      </h1>

      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="rounded p-5 shadow text-center h-100">
              <IoDocumentText className="fs-1 text-primary mb-3" />
              <h4>Add your Details</h4>
              <p>Add pre-written examples to each section</p>
              <h5 className="text-muted">Step 1</h5>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="rounded p-5 shadow text-center h-100">
              <FaDownload className="fs-1 text-danger mb-3" />
              <h4>Download and Start Applying</h4>
              <p>Download your resume and start applying for jobs</p>
              <h5 className="text-muted">Step 2</h5>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link
            to="/form"
            className="btn px-4 py-2 text-light"
            style={{ backgroundColor: "#896c22" }}
          >
            LET'S START
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResumeSteps;
