import React from "react";
import logo from "../../css_files/images/RTlogo2.svg";
import notification from "../../css_files/images/bell.svg";

const DashBoardComp = ({ DashBoard, Home, a1, a2, a3, a4 }) => {
  return (
    <div className="dashBoard">
      <div className="leftColumn">
        <ul className="DashNavs">
          <li className="Dashna">
            <img src={logo} alt="" />
          </li>
          <li className="Dashnav">
            <h5>DashBoard</h5>
          </li>
          <li className="Dashnav">
            <h5>Home</h5>
          </li>
          <li className="Dashnav">
            <h5>{a1}</h5>
          </li>
          <li className="Dashnav">
            <h5>{a2}</h5>
          </li>
          <li className="Dashnav">
            <h5>{a3}</h5>
          </li>
          <li className="Dashnav">
            <h5>{a4}</h5>
          </li>
        </ul>
      </div>
      <div className="Dashheader">
        <input type="Search" className="DashSearch" placeholder="Search.." />
        <button className="newProjectbtn">+ New Project</button>
        <img src={notification} className="notification" alt="" />
        <h3>Williams</h3>
      </div>
    </div>
  );
};

export default DashBoardComp;
