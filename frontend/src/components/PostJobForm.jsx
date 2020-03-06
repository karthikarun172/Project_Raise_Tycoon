import React from "react";
import FormProperties from "./common/FormProperties";
import Joi from "joi-browser";
import axios from "axios";
import NavBar from "./common/Navbar";
import Footer from "./common/footer";

class PostJobForm extends FormProperties {
  state = {
    data: {
      selectCategory: "",
      ProjectTitle: "",
      ExplainInDetail: "",
      Skills: "",
      projectType: "",
      Budget: "",
      Duration: ""
    },
    errors: {},
    options: [
      { name: "Web Developer", id: 1 },
      { name: "Mobile Developer", id: 2 },
      { name: "Software Developer", id: 3 },
      { name: "Front-End Developer", id: 4 },
      { name: "Back-End Developer", id: 5 },
      { name: "FullStack Developer", id: 6 },
      { name: "Developer", id: 7 }
    ],
    type: [
      { id: 1, name: "Fixed" },
      { id: 2, name: "Hourly" }
    ]
  };

  schema = {
    selectCategory: Joi.string()
      .required()
      .label("Category"),
    ProjectTitle: Joi.string()
      .required()
      .label("Title"),
    ExplainInDetail: Joi.string()
      .min(10)
      .max(1000)
      .required()
      .label("Details"),
    Skills: Joi.string()
      .required()
      .label("skills"),
    projectType: Joi.string()
      .required()
      .label("Project Type"),
    Budget: Joi.number()
      .required()
      .label("Budget"),

    Duration: Joi.number()
      .required()
      .label("Duration")
  };
  doSubmit = () => {
    axios
      .post("http://localhost:12000/api/postaJob", this.state.data)
      .then(res => console.log(res))
      .catch(er => console.log("somthing Failed", er));
    this.props.history.push("/home");
  };
  render() {
    return (
      <div className="jobFormNav">
        <NavBar />
        <div className="applicationForm">
          <div className="formContainer">
            <h1>Post a Job</h1>
            <form onSubmit={this.handleSubmit} className="form">
              {this.renderSelect(
                "selectCategory",
                "Select Category",
                this.state.options
              )}
              {this.renderInput(
                "ProjectTitle",
                "Project Title",
                "What is your project about"
              )}
              {this.renderLargeInput(
                "ExplainInDetail",
                "Explain In Detail",
                "100",
                "30",
                "explain it in breif"
              )}
              {this.renderLargeInput(
                "Skills",
                "Skills Required",
                "100",
                "10",
                "enter the skills you required"
              )}
              {this.renderSelect(
                "projectType",
                "Project Type",
                this.state.type
              )}
              {this.renderSmallInput("Budget", "Budget")}
              {this.renderSmallInput("Duration", "Duration")}
              {this.renderButton("Submit", "SubmitButton")}
            </form>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default PostJobForm;
