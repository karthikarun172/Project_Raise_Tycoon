import React, { Component } from "react";
import axios from "axios";
import NavBar from "./common/Navbar";
import Footer from "./common/footer";
class Portfolio extends Component {
  state = {
    Profile: []
  };
  async componentDidMount() {
    const { data } = await axios.get(
      `http://localhost:12000/api/application/${this.props.match.params._id}`
    );
    this.setState({ Profile: data });
    console.log(this.state.Profile);
  }

  render() {
    const { Profile } = this.state;
    return (
      <div className="profile">
        <NavBar />
        <div className="profile_sec1">
          <img src="" alt="" />
          <h2>{Profile.Firstname + " " + Profile.Lastname}</h2>
          <h3>{Profile.SelectCategory}</h3>
        </div>
        <div className="hirebtn">
          <button className="hire">Hire</button>
        </div>

        <div className="profileDatas">
          <div className="flex1">
            <div className="charges">
              <h3>{"$ " + Profile.HourlyRate + " /hr"}</h3>
              <h5>{"Total Earning: "}</h5>
              <h5>{"Project Complected: "}</h5>
              <h5>{"Service Delivered: "}</h5>
            </div>
            <div className="profileabt">
              <h4>ABOUT ME</h4>
              <p>{Profile.about}</p>
            </div>
          </div>
          <div className="flex2">
            <div className="address">
              <h4>{Profile.Location}</h4>
              <h5>pincode -620020</h5>
            </div>
            <div className="expertise">
              <h4>MY Expertise</h4>
              <h2>{Profile.Skills}</h2>
            </div>
          </div>
          <div className="flex3">
            <div className="flex31">
              <div className="work">
                <h4>MY WORKS</h4>
                <p>works goes here</p>
              </div>
              <div className="experience">
                <h4>MY EXPERIENCE</h4>
                <p>Experience goes here</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
