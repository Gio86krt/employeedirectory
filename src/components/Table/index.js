import "./style.css";
import React from "react";
import TableRow from "../TableRow/TableRow";

function Table(props) {
  return (
    <div className="row justify-content-center">
      <div className="col-12 table">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th scope="col">OUR FACES</th>
              <th scope="col">FIRST NAME</th>
              <th scope="col" onClick={props.sortName} id="lastName">
                LAST NAME
              </th>
              <th scope="col">EMAIL</th>
              <th scope="col" id="dob" onClick={props.sortDob}>
                DOB
              </th>
            </tr>
          </thead>
          <tbody>
            {props.results.map((el) => {
              console.log(el);
              return <TableRow key={el.id.value} props={el} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
