import React, { Component } from "react";
import DashBoardComp from "./common/DashBoardComp";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <DashBoardComp
        a1="Profile"
        a2="Search for jobs"
        a3="Post a Job"
        a4="Payment Methord"
      />
    );
  }
}

export default Dashboard;
