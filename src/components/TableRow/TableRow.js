import React from "react";

function TableRow(props) {
  const { name, email, dob, picture } = props.props;
  const birthDay = dob.date.slice(0, 10);
  return (
    <tr className="tableRow">
      <th scope="row">
        <img src={picture.medium}></img>
      </th>
      <td>{name.first}</td>
      <td>{name.last}</td>
      <td>{email}</td>
      <td>{birthDay}</td>
    </tr>
  );
}

export default TableRow;
