import React, { Component } from "react";
import axios from "axios";
import FormProperties from "./common/FormProperties";
import Joi from "joi-browser";
import Detailed from "./common/DetailsofProject";
import NavBar from "./common/Navbar";
import Footer from "./common/footer";

class ProjectDetails extends FormProperties {
  state = {
    data: {
      BidAmount: "",
      Duration: "",
      Describe: "",
      MileStone: ""
    },
    errors: {},
    Jobs: []
  };

  async componentDidMount() {
    const { data } = await axios.get(
      `http://localhost:12000/api/postaJob/${this.props.match.params._id}`
    );
    this.setState({ Jobs: data });
  }
  schema = {
    BidAmount: Joi.number().required(),
    Duration: Joi.number().required(),
    Describe: Joi.string().required(),
    MileStone: Joi.string().required()
  };
  doSubmit = () => {
    axios
      .post("http://localhost:12000/api/BidDetails", this.state.data)
      .then(res => console.log(res))
      .catch(er => console.log(er, "somthing happend"));

    // Create a backend for bidding
  };
  render() {
    const { Jobs } = this.state;
    return (
      <div className="projectmain">
        <NavBar />
        <div className="theProjectDetails">
          <div className="projectDetails">
            <h1>Project Details</h1>
            <Detailed
              projectTitle={Jobs.ProjectTitle}
              ProjectType={Jobs.projectType}
              selectCategory={Jobs.selectCategory}
              Explanation={Jobs.ExplainInDetail}
              SkillsRequires={Jobs.Skills}
              BidAmount={Jobs.Budget}
            />
          </div>

          <div className="placeaBid">
            <h3>Place Your Bid on this Project</h3>
            <div className="bid">
              <form onSubmit={this.handleSubmit}>
                <h4>Bid Details</h4>

                {this.renderInput1(
                  "BidAmount",
                  "Bid Amount",
                  "enter the bid amount"
                )}

                {this.renderInput1(
                  "Duration",
                  "Duration",
                  "how much time it takes"
                )}
                {this.renderLargeInput1(
                  "Describe",
                  "Describe your proposal",
                  "10",
                  "20",
                  "Describe about what you are goind to do"
                )}
                {this.renderLargeInput1(
                  "MileStone",
                  "Suggest a Milstone",
                  "100",
                  "2",
                  "add a mileStone"
                )}
                {this.renderButton("Add a milestone")}
                <div className="placeBidbtn">
                  {this.renderButton("Place Bid", "bidbtn")}
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProjectDetails;
