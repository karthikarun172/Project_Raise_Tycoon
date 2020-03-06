import React from "react";

const Detailed = ({
  projectTitle,
  Explanation,
  SkillsRequires,
  BidAmount,
  ProjectType,
  selectCategory
}) => {
  return (
    <div className="allDetails">
      <div className="details1">
        <div className="dr">
          <h2>{projectTitle}</h2>
          <h5>{selectCategory}</h5>
          <p>{Explanation}</p>
        </div>
        <div className="dl">
          <h3>{ProjectType}</h3>
        </div>
      </div>
      <div className="skillsndBid">
        <div className="skills">
          <h5>Skills Required</h5>
          <h6>{SkillsRequires}</h6>
        </div>
        <div className="bidAmt">
          <h2>{"$" + BidAmount}</h2>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
