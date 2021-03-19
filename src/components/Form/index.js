import React from "react";
import "./style.css";

function Form(props) {
  return (
    <div className="form">
      <input
        onChange={props.handleInputChange}
        type="text"
        className="input"
        placeholder="Search employee"
      ></input>

      <button
        onClick={props.handleFormSubmit}
        id="search"
        className="btn btn-primary"
      >
        Search Employees
      </button>
    </div>
  );
}

export default Form;
