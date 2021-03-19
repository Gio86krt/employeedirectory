import "./style.css";
import React from "react";
import TableRow from "../TableRow/TableRow";

function Table(props) {
  // console.log(props.results[0].email, "  FROM CARD");

  // const obj = props.results[0];
  // const { name, email, picture } = obj;
  // console.log(name, email, picture.thumbnail);
  return (
    <div className="row justify-content-center">
      <div className="col-12 table">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">First Name</th>
              <th scope="col" onClick={props.sortName} id="lastName">
                Last Name
              </th>
              <th scope="col">Email</th>
              <th scope="col" id="dob" onClick={props.sortDob}>
                DOB
              </th>
            </tr>
          </thead>
          <tbody>
            {props.results.map((el) => {
              return <TableRow props={el} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
