import React from "react";
import Typical from "react-typical";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
     
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
      <div className="footer-info">
      <h1>César Andrés Abadía Dávila </h1>
        <span className="primary-text">
          {""}
          <h1>
            {""}
            <Typical
              loop={Infinity}
              wrapper="p"
              steps={[
                "Ethusiastic Dev 🌇",
                2000,
                "Desarollador Full Stack      💻",
                2500,
                "React Dev 🔢",
                3000,
                "MERN Stack Dev 🚄",
                3500,
              ]}
            />
          </h1>
        </span>

        <p>Santiago de Cali</p>
        <p>telefono: 316 3710912</p>
        <p>Mail: ceanabad@gmail.com</p>

        <div className="colz">
          <div className="colz-icon">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="design-by">Design By César Andrés Abadía </div>
      </div>
    </footer>
  );
};

export default Footer;
