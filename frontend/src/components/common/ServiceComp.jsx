import React from "react";
import Link from "react-router-dom";

const ServiceComp = ({ label, image, nav, ...rest }) => {
  return (
    <div className="serviceComp">
      <a to={nav}>
        <div className="imgBG">
          <img src={image} alt="" {...rest} className="img" />
        </div>
        <h4 className="ServieLabel">{label}</h4>
      </a>
    </div>
  );
};

export default ServiceComp;
