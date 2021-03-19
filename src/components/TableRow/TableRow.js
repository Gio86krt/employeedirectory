import React from "react";

function TableRow(props) {
  const { name, email, dob, picture } = props.props;
  // console.log("test tablerow");
  // console.log(props.props.picture.thumbnail);
  return (
    <tr>
      <th scope="row">
        <img src={picture.thumbnail}></img>
      </th>
      <td>{name.first}</td>
      <td>{name.last}</td>
      <td>{email}</td>
      <td>{dob.date}</td>
    </tr>
  );
}

export default TableRow;
