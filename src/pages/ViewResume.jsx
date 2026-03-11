import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoReloadOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import Preview from "../components/Preview";
import Edit from "../components/Edit";
import { Button } from "@mui/material";

function ViewResume() {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn text-primary fs-2 me-2">
              <FaFileDownload />
            </button>
            <Button className="btn"><Edit /></Button>
            <Link to={"/downloads"} className="btn text-danger fs-2 me-2">
              <IoReloadOutline />
            </Link>
            <Link to={"/form"} className="btn text-success fs-2 me-2">
              <IoArrowBack />
            </Link>
          </div>
          <div className="mt-5">
            <Preview />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default ViewResume;
