import React from "react";
import homelogo from "../../css_files/images/homelogo.svg";
import { Link } from "react-router-dom";

const HomeNavBar = () => {
  return (
    <div className="HomeNav">
      <div className="homelogo">
        <img src={homelogo} alt="" />
      </div>
      <div className="homenavBtn">
        <Link to="/postjob" style={{ textDecoration: "none", color: "white" }}>
          <button className="Postjob">Post a Job</button>
        </Link>
        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
          <button className="Login">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeNavBar;
