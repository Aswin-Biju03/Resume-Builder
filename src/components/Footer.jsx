import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



function Footer() {
  return (
    <div
      style={{ height: "400px", backgroundColor: "#896c22", color: "white" }}
      className="d-flex align-items-center flex-column justify-content-center"
    >
      <h1 className="mb-4">Contact us</h1>
      <h4><IoMail />resumebuilder@gmail.com</h4>
      <h4 className="mt-4"><FaPhoneAlt />9549652351</h4>
      <h2 className="mt-3">Connect With Us</h2>
      <div className="my-4 fs-4">
        <FaInstagram />
        <FaFacebook className="mx-3"/>
        <FaWhatsapp />

      </div>
      <h5>Designed to built with <FaHeart /> using React</h5>
    </div>
  );
}

export default Footer;
