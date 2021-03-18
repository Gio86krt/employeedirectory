import "./style.css";
import { React, Component } from "react";
import Card from "../Card";
import API from "../../utils/API";
import Form from "../Form";

class Wrapper extends Component {
  state = {
    search: "",
    results: [],
  };

  getData = (() => {
    API.getRandomData()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
    console.log(this.state.results, "  RESULTS");
  })();

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // this.getData();
    //////search data
  };

  render() {
    return (
      <div className="wrapper">
        <Form
          //   onLoad={this.getData}
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Card results={this.state.results} />
      </div>
    );
  }
}

export default Wrapper;
