import React, { Component } from "react";
import ImageHeader from "./ImageHeader";
import ServiceComp from "./ServiceComp";
import { register } from "../../serviceWorker";
import HomeNavBar from "./navBar1";

class HomeProperties extends Component {
  renderHomeNav() {
    return <HomeNavBar />;
  }
  renderHeader(label, label1) {
    return (
      <ImageHeader label={label} className="headerButton" label1={label1} />
    );
  }
  renderServices(image, label, nav) {
    return <ServiceComp image={image} label={label} nav={nav} />;
  }
  renderScope(label, paragraph) {
    return (
      <div>
        <h5>{label}</h5>
        <p>{paragraph}</p>
      </div>
    );
  }
  renderHowitWorks(image, heading, para) {
    return (
      <div>
        <img src={image} alt="" />
        <h5>{heading}</h5>
        <p>{para}</p>
      </div>
    );
  }
}

export default HomeProperties;
