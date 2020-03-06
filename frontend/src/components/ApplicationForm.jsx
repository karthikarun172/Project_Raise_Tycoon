import React from "react";
import FormProperties from "./common/FormProperties";
import Joi from "joi-browser";
import axios from "axios";
import NavBar from "./common/Navbar";
import Footer from "./common/footer";

class ApplicationForm extends FormProperties {
  state = {
    data: {
      Firstname: "",
      Lastname: "",
      EmailID: "",
      Password: "",
      VerifyPassword: "",
      SelectCategory: "",
      Skills: "",
      Location: "",
      about: "",
      ProjectType: "",
      HourlyRate: "",
      WorkType: ""
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
      { id: 1, name: "Hourly" },
      { id: 2, name: "Fixed" }
    ],
    worktype: [
      { id: 1, name: "Part Time" },
      { id: 2, name: "Full Time" },
      { id: 3, name: "Both" }
    ]
  };

  schema = {
    Firstname: Joi.string()
      .required()
      .label("Firstname"),
    Lastname: Joi.string()
      .required()
      .label("Lastname"),
    EmailID: Joi.string()
      .email()
      .required()
      .label("Email Id"),
    Password: Joi.string()
      .required()
      .label("Password"),
    VerifyPassword: Joi.any()
      .valid(Joi.ref("Password"))
      .required()
      .label("Password"),
    SelectCategory: Joi.string()
      .required()
      .label("Category"),
    Skills: Joi.string()
      .min(2)
      .max(10)
      .required()
      .label("Skills"),
    Location: Joi.string()
      .required()
      .label("location"),
    about: Joi.string()
      .required()
      .label("About"),
    ProjectType: Joi.string()
      .required()
      .label("ProjectType"),
    HourlyRate: Joi.string()
      .required()
      .label("HourlyRate"),
    WorkType: Joi.string()
      .required()
      .label("WorkType")
  };

  doSubmit = () => {
    axios
      .post("http://localhost:12000/api/application", this.state.data)
      .then(res => console.log("submitted"))
      .catch(ex => console.log("error", ex));
    this.props.history.push("/freelancers");
  };

  render() {
    return (
      <div className="applicationFormMain">
        <NavBar />

        <div className="applicationForm">
          <div className="formContainer">
            <h1>Apply as a Freelance </h1>
            <form onSubmit={this.handleSubmit} className="form">
              <div className="names">
                {this.renderSmallInput("Firstname", "First name", "first name")}
                {this.renderSmallInput("Lastname", "LastName", "last name")}
              </div>
              {this.renderInput("EmailID", "Email ID", "enter your Email-ID")}
              {this.renderInput(
                "Password",
                "Password",
                "enter the password",
                "password"
              )}

              {this.renderInput(
                "VerifyPassword",
                "Confirm Password",
                "confirm your Password",
                "password"
              )}

              {this.renderSelect(
                "SelectCategory",
                "Select Category",
                this.state.options
              )}

              {this.renderLargeInput(
                "Skills",
                "skills",
                "100",
                "10",
                "enter your skills"
              )}
              {this.renderInput("Location", "Address", "enter your Location")}
              {this.renderLargeInput(
                "about",
                "About",
                "100",
                "30",
                "Explain about yourself"
              )}
              {this.renderSelect(
                "ProjectType",
                "Project Type",
                this.state.type
              )}
              {this.renderSmallInput(
                "HourlyRate",
                "Hourly Rate",
                "how much do you charge"
              )}
              {this.renderSelect("WorkType", "Work Type", this.state.worktype)}
              {this.renderButton("submit", "SubmitButton")}
            </form>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ApplicationForm;
