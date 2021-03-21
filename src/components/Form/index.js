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
    </div>
  );
}

export default Form;
