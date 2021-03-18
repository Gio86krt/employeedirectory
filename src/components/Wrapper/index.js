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

  getData = () => {
    API.getRandomData().then((res) => {
      console.log(res);
      this.setState({ results: res.data.data });
    });
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getData();
  };

  render() {
    return (
      <div className="wrapper">
        <Form
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Card />
      </div>
    );
  }
}

export default Wrapper;
