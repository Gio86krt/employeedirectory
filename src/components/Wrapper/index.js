import "./style.css";
import { React, Component } from "react";
import Table from "../Table";
import API from "../../utils/API";
import Form from "../Form";

class Wrapper extends Component {
  state = {
    search: "",
    results: [],
    filtered: [],
  };

  getData = async () => {
    await API.getRandomData()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
    // console.log(this.state.results, "  RESULTS");
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
    const newArr = this.state.results.filter((el) =>
      el.name.last.toLowerCase().includes(value)
    );
    this.setState({ filtered: newArr });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.results.length === 0) this.getData();
  };

  sortName = () => {
    console.log("name");
    // this.state.filtered.length > 0 ? this.state.filtered : this.state.results;
  };

  sortDob = () => {
    console.log("DOB");
  };

  render() {
    return (
      <div className="wrapper">
        <Form
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table
          sortName={this.sortName}
          sortDob={this.sortDob}
          results={
            this.state.filtered.length > 0
              ? this.state.filtered
              : this.state.results
          }
          getData={this.getData}
        />
      </div>
    );
  }
}

export default Wrapper;
