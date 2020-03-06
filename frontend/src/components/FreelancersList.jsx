import React, { Component } from "react";
import ProfileThumb from "./common/profileThumb";
import axios from "axios";
import Search from "./common/Searchs";
import { Link } from "react-router-dom";
import Pagination from "./common/Pagination";
import { Paginate } from "../utils/Paginate";
import NavBar from "./common/Navbar";
import Footer from "./common/footer";

class FreelancersList extends Component {
  state = {
    applications: [],
    currentPage: 1,
    pageSize: 16
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:12000/api/application");
    this.setState({ applications: data });
  }
  handlePaginate = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.applications;
    const { applications, currentPage, pageSize } = this.state;

    if (count === 0) return <h3>there is application form in the database</h3>;
    const application = Paginate(applications, currentPage, pageSize);
    return (
      <div className="FreelancelistNav">
        <NavBar />
        <div className="listmain">
          <div className="leftSide">
            <ul className="filterLists">
              <li className="filterlist">
                <h4>List of Freelancers</h4>
              </li>
              <li className="filterlist">Developers</li>
              <li className="filterlist">Designers</li>
              <li className="filterlist">ML Engineers</li>
              <li className="filterlist">DL Engineers</li>
              <li className="filterlist">IOT Engineers</li>
            </ul>
            <div className="freelancersList">
              <ul className="Flists">
                {application.map(b => (
                  <div key={b._id}>
                    <Link
                      to={`/Freelancers/${b._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <ProfileThumb
                        name={b.Firstname + " " + b.Lastname}
                        designation={b.SelectCategory}
                        avalability={"Available"}
                        location={b.Location}
                        charge={"$" + b.HourlyRate}
                        explain={b.about}
                        Skills={b.Skills}
                      />
                    </Link>
                  </div>
                ))}
              </ul>
              <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePaginate}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FreelancersList;
