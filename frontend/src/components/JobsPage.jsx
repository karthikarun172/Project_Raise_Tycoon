import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import JobsComponent from "./common/JobsComp";
import Search from "./common/Searchs";
import Pagination from "./common/Pagination";
import { Paginate } from "../utils/Paginate";
import NavBar from "./common/Navbar";
import Footer from "./common/footer";
class Jobs extends Component {
  state = {
    Jobs: [],
    currentPage: 1,
    pageSize: 10
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:12000/api/postaJob");
    this.setState({ Jobs: data });
  }
  handlePaginate = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.Jobs;
    const { Jobs, currentPage, pageSize } = this.state;
    const Job = Paginate(Jobs, currentPage, pageSize);

    return (
      <div className="JobsDetail">
        <NavBar />
        <div className="details">
          <Search />
          <ul>
            {Job.map(j => (
              <div key={j._id}>
                <Link to={`/jobs/${j._id}`} style={{ textDecoration: "none" }}>
                  <JobsComponent
                    Title={j.ProjectTitle}
                    Paisa={j.Budget}
                    Short={j.selectCategory}
                    Details={j.ExplainInDetail}
                    Skills={j.Skills}
                  />
                </Link>
              </div>
            ))}
          </ul>
        </div>
        <Pagination
          onPageChange={this.handlePaginate}
          itemsCount={count}
          currentPage={currentPage}
          pageSize={pageSize}
        />
        <Footer />
      </div>
    );
  }
}

export default Jobs;
