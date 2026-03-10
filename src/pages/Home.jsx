import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* landing  */}
      <div
        style={{
          height: "100vh",
          backgroundImage: 'url("/landing.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="row container-fluid">
          <div className="col-lg-4"></div>
          <div
            className="col-lg-4 rounded shadow p-5 text-center text-light"
            style={{ backgroundColor: "rgba(166, 153, 121, 0.6)" }}
          >
            <h3>
              Designed To Get Hired. Your Skills Your Story, Your Next Job - All
              In One.
            </h3>
            <Link
              to={"/steps"}
              className="btn text-light mt-2"
              style={{ backgroundColor: "rgba(137, 108, 34, 1)" }}
            >
              Create Your Resume
            </Link>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      {/* tools  */}
      <div className="container mb-5">
        <h1 className="text-center my-5">Tools</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h5>Resume</h5>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h5>Cover Letters</h5>
            <p>Easily write professional cover letters.</p>
            <h5>Jobs</h5>
            <p>Automatically receive new and relevant job postings.</p>
            <h5>Applications</h5>
            <p>
              Effortlessly manage and track your job applications in an
              organized manner.
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img style={{ height: "500px" }} src="/resume.png" alt="" />
          </div>
        </div>
      </div>
      {/* image */}
      <div
        style={{
          height: "70vh",
          backgroundImage: 'url("/meeting.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>
      {/* testimony  */}
      <div className="container mb-5">
        <h1 className="text-center my-5">Testimony</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h1>Trusted by professionals worldwide.</h1>
            <p>
              At LiveCareer, we don't just help you create résumés — we help you
              land the job. Whether you're a seasoned professional or just
              starting out, our tools are designed to get results.
            </p>
            <p>
              In fact, users who used LiveCareer reported getting hired an
              average of 48 days faster.
            </p>
            <p>
              Join thousands of job-seekers who’ve fast-tracked their careers
              with a résumé that truly stands out
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-lg-3">
                <img
                  className="w-100 p-2"
                  src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="w-100 p-2"
                  src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="w-100 p-2"
                  src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="w-100 p-2"
                  src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="w-100 p-2"
                  src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="w-100 p-2"
                  src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="w-100 p-2"
                  src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="w-100 p-2"
                  src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="w-100 p-2"
                  src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="w-100 p-2"
                  src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="w-100 p-2"
                  src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="w-100 p-2"
                  src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
