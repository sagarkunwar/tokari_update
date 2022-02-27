import React, { useEffect } from "react";

import sagar from "../assets/sagar.jpg";
import rayan from "../assets/rayan.jpg";
import durgesh from "../assets/durgesh.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

//importing css
import "../styles/Team.css";

//Animation on Scroll
import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="main-container">
      <h1>
        Meet Our Team <br />
        <span> Vision to change Industry </span>
      </h1>
      <div
        className="container"
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
      >
        <div className="card">
          <div className="content">
            <div className="imgs">
              <img src={sagar} alt="" />
            </div>
            <h3>
              Sagar Kunwar <br /> <span>Co-Founder</span>{" "}
            </h3>
            <ul className="sci">
              <li>
                <a href="https://www.facebook.com/sagar.kunwar.771">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/kunwars.sagar/">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/sagar-kunwar-9998b41a8">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="imgs">
              <img src={rayan} alt="" />
            </div>
            <h3>
              Rayan Shrestha <br /> <span>Co-Founder</span>{" "}
            </h3>
            <ul className="sci">
              <li>
                <a href="/">
                  <FaFacebook />
                </a>
                <a href="/">
                  <FaInstagram />
                </a>
                <a href="/">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="imgs">
              <img src={durgesh} alt="" />
            </div>
            <h3>
              Durgesh Gupta <br /> <span>Co-Founder</span>{" "}
            </h3>
            <ul className="sci">
              <li>
                <a href="/">
                  <FaFacebook />
                </a>
                <a href="/">
                  <FaInstagram />
                </a>
                <a href="/">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
