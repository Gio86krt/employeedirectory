import React from "react";
import "./style.css";

function Form(props) {
  return (
    <div>
      <input
        onChange={props.handleInputChange}
        type="text"
        className="input"
        placeholder="Search employee"
      ></input>
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Search
      </button>
    </div>
  );
}

export default Form;
