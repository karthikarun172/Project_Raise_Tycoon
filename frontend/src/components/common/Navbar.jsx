import React from "react";
import logo from "../../css_files/images/RTlogo2.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="Navigationbar">
        <div className="logocol">
          <li className="logo">
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              <img src={logo} alt="" />
            </Link>
          </li>
        </div>
        <div className="navCol">
          <li className="Navigate">
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              <h4>Home</h4>
            </Link>
          </li>
          <li className="Navigate">
            <Link to="/jobs" style={{ textDecoration: "none", color: "black" }}>
              <h4>Jobs</h4>
            </Link>
          </li>
          <li className="Navigate">
            <Link
              to="/DashBoard"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h4>Dashboard</h4>
            </Link>
          </li>
          <li className="Navigate">
            <Link
              to="/postjob"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h4>Post a Job</h4>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
