import React from "react";

const JobsComponent = ({ Title, Short, Paisa, Skills, Detail }) => {
  return (
    <div className="all_Datas">
      <div className="datas">
        <h3>{Title}</h3>
        <h6>{Short}</h6>
        <p>{Detail}</p>
        <h6>{Skills}</h6>
      </div>
      <div className="paisa">
        <h1>{"$" + Paisa}</h1>
      </div>
    </div>
  );
};

export default JobsComponent;
