import React, { useEffect, useRef, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { IoReloadOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import Preview from "../components/Preview";
import Edit from "../components/Edit";
import { Button } from "@mui/material";
import { getResumeAPI } from "../services/allResumeAPIService";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import { downloadResumeAPI } from "../services/allResumeAPIService";

function ViewResume() {
  const { id } = useParams();
  const [resumeData, setResumeData] = useState({});
  const previewRef = useRef();
  console.log(resumeData);

  useEffect(() => {
    getResumeData();
  }, []);

  const getResumeData = async () => {
    if (id) {
      const result = await getResumeAPI(id);
      setResumeData(result.data);
    }
  };

  const downloadResume = async () => {
    const previewTag = previewRef.current;
    const canvas = await html2canvas(previewTag);
    canvas.toBlob((blob) => {
      const shortUrl = URL.createObjectURL(blob);
      generatePDF(shortUrl);
    });
  };
  const generatePDF = async (resumeImg) => {
    const today = new Date();
    const timeStamp = `${today.toLocaleDateString()},${today.toLocaleTimeString()}`;
    const pdf = new jspdf();
    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(resumeImg, "PNG", 0, 0, imgWidth, imgHeight);
    const downloadDetails = {
      timeStamp,
      resumeId: id,
      resumeImg,
    };
    const result = await downloadResumeAPI(downloadDetails);
    console.log(result);

    if (result.status == 201) {
      pdf.save(`${resumeData?.fullname}-resume.pdf`);
    }
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn text-primary fs-2 me-2"
              onClick={downloadResume}
            >
              <FaFileDownload />
            </button>
            <Button className="btn">
              <Edit />
            </Button>
            <Link to={"/downloads"} className="btn text-danger fs-2 me-2">
              <IoReloadOutline />
            </Link>
            <Link to={"/form"} className="btn text-success fs-2 me-2">
              <IoArrowBack />
            </Link>
          </div>
          <div ref={previewRef} className="p-5">
            <Preview resumeData={resumeData} />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default ViewResume;
