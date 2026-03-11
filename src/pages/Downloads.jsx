import { Button } from "@mui/material";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function Downloads() {
  return (
    <div className="container">
      <div className="d-flex my-5 justify-content-between align-items-center">
        <h1>Downloaded Resume History</h1>
        <Link to={"/forms"}>
          <IoIosArrowBack />
          Back
        </Link>
      </div>
      <div className="row mb-5">
        <div className="col-lg-4">
          <div className="shadow p-3 rounded">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Review at : time</h5>
              <Button className="text-danger fs-5 btn">
                <MdDelete />
              </Button>
            </div>
            <div className="mt-3 text-center">
              <img
                height={"300px"}
                width={"200px"}
                src="https://marketplace.canva.com/EAGIzZzlHCg/3/0/1131w/canva-blue-and-gray-simple-professional-cv-resume-krkiJPv9338.jpg"
                alt="cv"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Downloads;
