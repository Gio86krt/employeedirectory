import "./style.css";
import { React, Component } from "react";
import Table from "../Table";
import API from "../../utils/API";
import Form from "../Form";

class Wrapper extends Component {
  state = {
    search: "",
    results: [],
  };

  getData = async () => {
    await API.getRandomData()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
    console.log(this.state.results, "  RESULTS");
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("CLick");
    this.getData();
    //////search data
  };

  render() {
    return (
      <div className="wrapper">
        <Form
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table results={this.state.results} getData={this.getData} />
      </div>
    );
  }
}

export default Wrapper;
