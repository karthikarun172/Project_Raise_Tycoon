import React, { Component } from "react";
import axios from "axios";

class Train extends Component {
  state = {
    image: null
  };
  handleChange = e => {
    this.setState({ image: URL.createObjectURL(e.target.files[0]) });
  };

  handelImageUpload() {
    const fd = new FormData();
    fd.append("images", this.state.image);
    console.log(fd);
    // axios
    //   .post("http://localhost/12000/api/image", fd)
    //   .then(res => console.log(res))
    //   .catch(er => console.log("somthing failed", er));
  }
  render() {
    return (
      <div className="train">
        <input type="file" onChange={this.handleChange} />
        <img
          src={this.state.image}
          alt=""
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "solid 2px gray",
            boxShadow: "12px 12px 12px gray",
            objectFit: "cover",
            objectPosition: "100% 0"
          }}
        />
        <button type="submit" onClick={this.handelImageUpload}>
          Upload
        </button>
      </div>
    );
  }
}

export default Train;
