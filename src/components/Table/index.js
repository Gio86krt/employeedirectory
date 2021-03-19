import "./style.css";
import React from "react";
import TableRow from "../TableRow/TableRow";

function Table(props) {
  // console.log(props.results[0].email, "  FROM CARD");

  // const obj = props.results[0];
  // const { name, email, picture } = obj;
  // console.log(name, email, picture.thumbnail);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((el) => {
          console.log(el);
          return <TableRow props={el} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
