import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import {
  getDownloadResumeAPI,
  deleteDownloadResumeAPI,
} from "../services/allResumeAPIService";

function Downloads() {
  const [allDownloads, setAllDownloads] = useState([]);

  console.log(allDownloads);

  useEffect(() => {
    getAllDownloads();
  }, []);

  const getAllDownloads = async () => {
    const result = await getDownloadResumeAPI();
    if (result.status == 200) {
      setAllDownloads(result.data);
    }
  };

  const removeDownload = async (id) => {
    await deleteDownloadResumeAPI(id);
    getAllDownloads();
  };
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
        {allDownloads.length > 0 ? (
          allDownloads?.map((resume) => (
            <div key={resume?.resumeId} className="col-lg-4 mb-4">
              <div className="shadow p-3 rounded">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Review at : {resume?.timeStamp}</h5>
                  <Button
                    onClick={() => {
                      removeDownload(resume?.id);
                    }}
                    className="text-danger fs-5 btn"
                  >
                    <MdDelete />
                  </Button>
                </div>
                <div className="mt-3 text-center">
                  <Link to={`/resume/${resume?.resumeId}/view`}>
                    <img
                      height={"300px"}
                      width={"200px"}
                      src={resume?.resumeImg}
                      alt="cv"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center fw-bolder my-5">
            No Resumes are downloaded yet !!{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Downloads;
