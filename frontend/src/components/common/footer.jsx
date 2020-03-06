import React from "react";
import { Link } from "react-router-dom";
import article1 from "../../css_files/images/article1.png";
import article2 from "../../css_files/images/article2.png";
import fb from "../../css_files/images/socialmediaIcoons/fb.svg";
import insta from "../../css_files/images/socialmediaIcoons/insta.svg";
import twitter from "../../css_files/images/socialmediaIcoons/tw.svg";
import LinkedIn from "../../css_files/images/socialmediaIcoons/in.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="navigation">
        <h4>Navigation</h4>
        <ul className="footernavs">
          <li className="footernav">
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              <h6>Home</h6>
            </Link>
          </li>
          <li className="footernav">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h6>About Us</h6>
            </Link>
          </li>
          <li className="footernav">
            <Link
              to="/Login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h6>Log In</h6>
            </Link>
          </li>
          <li className="footernav">
            <Link
              to="/postjob"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h6>Post a Job</h6>
            </Link>
          </li>
          <li className="footernav">
            <Link to="/jobs" style={{ textDecoration: "none", color: "white" }}>
              <h6>Search For Jobs</h6>
            </Link>
          </li>
        </ul>
      </div>
      <div className="LatestArticles">
        <h4>Latest Articles</h4>
        <ul className="Articles">
          <li className="ariticle">
            <img src={article1} alt="" />
            <p>Easy way to learn Programming</p>
          </li>
          <li className="ariticle">
            <img src={article2} alt="" />
            <p>Alogrithms and DataStructure</p>
          </li>
        </ul>
      </div>
      <div className="followUson">
        <h4>Follow Us On</h4>
        <ul className="follows">
          <li className="follow">
            <img src={fb} alt="" />
            <p>follow us on FaceBook</p>
          </li>
          <li className="follow">
            <img src={insta} alt="" />
            <p> follow us on Instagram</p>
          </li>
          <li className="follow">
            <img src={twitter} alt="" />
            <p>Follow us in Twitter</p>
          </li>
          <li className="follow">
            <img src={LinkedIn} alt="" />
            <p>Follow us in LinkedIn</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
