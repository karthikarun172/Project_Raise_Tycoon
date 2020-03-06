import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ApplicationForm from "./components/ApplicationForm";
import Home from "./components/home";
import PostJobForm from "./components/PostJobForm";

import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/JobsPage";
import FreelancersList from "./components/FreelancersList";
import Portfolio from "./components/freelancerPortfolio";
import Jobs from "./components/JobsPage";
import DashBoard from "./components/DashBoard";
import About from "./components/about";
import LoginForm from "./components/LoginForm";
import Train from "./components/tain";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/jobs/:_id" component={ProjectDetails}></Route>
        <Route
          path="/jobs"
          render={props => <Jobs sortBy="newest" {...props} />}
        ></Route>
        <Route path="/Freelancers/:_id" component={Portfolio}></Route>
        <Route
          path="/Freelancers"
          render={props => <FreelancersList sortBy="newest" {...props} />}
        ></Route>
        <Route path="/postjob" component={PostJobForm}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/DashBoard" component={DashBoard}></Route>
        <Route path="/applicationForm" component={ApplicationForm}></Route>
        <Route path="/train" component={Train}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="" component=""></Route>
      </Switch>
    </div>
  );
}

export default App;
