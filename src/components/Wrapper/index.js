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
    // if (this.state.filtered.length === 0)
    //   throw new Error(`Employee not found!!`);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.results.length === 0) this.getData();
  };

  sortName = () => {
    // console.log("name");
    const arr =
      this.state.filtered.length > 0 ? this.state.filtered : this.state.results;
    arr.sort(
      (() => {
        return function sortIt(a, b) {
          const first = a.name.last.toLowerCase();
          const second = b.name.last.toLowerCase();

          let comparison = 0;
          if (first > second) comparison = 1;
          else if (first < second) comparison = -1;

          return comparison;
        };
      })()
    );
    this.setState({ results: arr });
  };

  sortDob = () => {
    // console.log("DOB");
    const arr =
      this.state.filtered.length > 0 ? this.state.filtered : this.state.results;
    arr.sort(
      (() => {
        return function sortIt(a, b) {
          const first = a.dob.age;
          const second = b.dob.age;

          let comparison = 0;
          if (first > second) comparison = 1;
          else if (first < second) comparison = -1;

          return comparison;
        };
      })()
    );
    this.setState({ results: arr });
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
