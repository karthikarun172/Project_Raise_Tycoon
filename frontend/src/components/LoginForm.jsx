import React, { Component } from "react";
import FormProperties from "./common/FormProperties";
import facebook from "../css_files/images/faceBook.svg";
import google from "../css_files/images/google.svg";
import divider from "../css_files/images/divider.svg";
import Joi from "joi-browser";

class LoginForm extends FormProperties {
  state = {
    data: {
      Email: "",
      Password: ""
    },
    errors: {}
  };
  schema = {
    Email: Joi.string()
      .email()
      .required(),
    Password: Joi.string().required()
  };
  doSubmit = () => {
    console.log(this.state.data);
  };
  render() {
    return (
      <div className="loginPage">
        <div className="loginBox">
          <h2>Sign In With</h2>
          <div className="signInOptions">
            <img src={facebook} alt="" />
            <img src={divider} alt="" />
            <img src={google} alt="" />
          </div>
          <div className="loginform">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("Email", "Email ID")}
              {this.renderInput("Password", "Password", "password", "password")}
              <button>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
