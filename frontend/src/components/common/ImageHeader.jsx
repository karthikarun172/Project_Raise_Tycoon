import React from "react";
import { Link } from "react-router-dom";

const ImageHeader = ({ label, className, label1 }) => {
  return (
    <div className="Iheader">
      <Link to="/Freelancers">
        <button className={className}>{label}</button>
      </Link>
      <Link to="/applicationForm">
        <button className={className}>{label1}</button>
      </Link>
    </div>
  );
};

export default ImageHeader;
