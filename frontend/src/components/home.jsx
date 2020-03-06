import React from "react";
import DataScience from "../css_files/images/services/DataScience.svg";
import iot from "../css_files/images/services/Iot.svg";
import Mob from "../css_files/images/services/Mob.svg";
import Design from "../css_files/images/services/Designlogo.svg";
import HomeProperties from "./common/HomeProprties";
import koty from "../css_files/images/Clients/koty.svg";
import Golden from "../css_files/images/Clients/Golden.svg";
import Bicel from "../css_files/images/Clients/bicel.svg";
import Vj from "../css_files/images/Clients/vjsol.svg";
import mks from "../css_files/images/Clients/MKS.svg";
import Post from "../css_files/images/howitWoks/postjob.svg";
import Bid from "../css_files/images/howitWoks/bidding.svg";
import Collabrate from "../css_files/images/howitWoks/collabrate.svg";
import Payment from "../css_files/images/howitWoks/payments.svg";
import Footer from "./common/footer";
import { Link } from "react-router-dom";
import HomeNavBar from "./common/navBar1";

class Home extends HomeProperties {
  state = {
    serviceData: [
      {
        id: 1,
        image: Mob,
        label: "Web/Mob/Software Development"
      },
      { id: 2, image: Design, label: "Design and Creative" },
      { id: 3, image: DataScience, label: "Data Science and  Analysis" },
      { id: 4, image: iot, label: "Internet of Things" },
      { id: 5, image: iot, label: "Internet of Things" },
      { id: 6, image: iot, label: "Internet of Things" },
      { id: 7, image: iot, label: "Internet of Things" },
      { id: 8, image: iot, label: "Internet of Things" }
    ],
    Clients: [
      { id: 1, image: koty },
      { id: 2, image: Golden },
      { id: 3, image: Bicel },
      { id: 4, image: Vj },
      { id: 5, image: mks }
    ],
    Scopes: [
      {
        id: 1,
        heading: "Complex Project",
        para: "Find specialized experts and agencies for large projects."
      },
      {
        id: 2,
        heading: "Longer-term contract",
        para: "Expand your team with a skilled resource."
      },
      {
        id: 3,
        heading: "Short term",
        para: "Build a pool of diverse experts for one-off tasks."
      }
    ],
    Process: [
      {
        id: 1,
        heading: "Post a Job",
        image: Post,
        para:
          "Tell us about your project. We connects you with top talent and agencies around the world, or near you."
      },
      {
        id: 2,
        heading: "Bids come to you",
        image: Bid,
        para:
          "Get qualified proposals within 24 hours. Compare bids,reviews, and prior work. Interview favorites and hire the best fit."
      },
      {
        id: 3,
        heading: "Collaborate easily",
        image: Collabrate,
        para:
          " Use our chat or video call, share files, and track project milestones from your desktop or mobile."
      },
      {
        id: 4,
        heading: "Payment simplified",
        image: Payment,
        para:
          "Pay hourly or fixed-price and receive invoices through Raise Tycoon. Pay for work you authorize."
      }
    ]
  };

  render() {
    const { serviceData, Clients, Scopes, Process } = this.state;

    return (
      <div className="home">
        {this.renderHeader("Hire a Freelancer", "Apply as a Freelancer")}
        <section className="homeSec">
          <h2>Our Services</h2>
          <div className="serviceCont">
            <ul className="services">
              {serviceData.map(service => (
                <li key={service.id}>
                  <Link
                    to="/Freelancers"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {this.renderServices(service.image, service.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <h2>Our Clients</h2>
        </section>
        <section className="OurClients">
          <ul className="Clients">
            {Clients.map(client => (
              <li className="Client" key={client.id}>
                <img src={client.image} className="clientLogos" alt="" />
              </li>
            ))}
          </ul>
        </section>
        <section className="hireDetails">
          <h4>Hire for any Scope</h4>
          <div className="hireScopes">
            <ul className="Scopes">
              {Scopes.map(scope => (
                <li>{this.renderScope(scope.heading, scope.para)}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="howitWorks">
          <div className="howitWorkContainer">
            <h4>How it works</h4>
            <ul className="HIWS">
              <li className="HIW">
                {Process.map(process => (
                  <li>
                    {this.renderHowitWorks(
                      process.image,
                      process.heading,
                      process.para
                    )}
                  </li>
                ))}
              </li>
            </ul>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
