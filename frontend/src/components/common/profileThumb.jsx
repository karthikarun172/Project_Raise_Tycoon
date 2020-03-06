import React from "react";

const ProfileThumb = ({
  name,
  designation,
  avalability,
  location,
  charge,
  expreince,
  review,
  explain,
  Skills
}) => {
  return (
    <div className="profileThumb">
      <div className="sec1">
        <div className="img">
          <img src="" alt="" />
          <h2>asd</h2>
        </div>
        <div className="datas">
          <h3>{name}</h3>
          <h5>{designation}</h5>
          <h6>{avalability}</h6>
        </div>
        <div className="datas1">
          <h6>{location}</h6>
          <h5>{charge + " /hr"}</h5>
        </div>
      </div>
      <div className="sec2">
        <h5>{"Experience : " + expreince}</h5>
        <h5>{"Review : " + review}</h5>
      </div>
      <div className="abt">
        <h3>About</h3>
        <p>{explain}</p>
        <h5>Skills</h5>
        <p>{Skills}</p>
      </div>
      <div className="booknow">
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default ProfileThumb;
