import React from "react";

function TableRow(props) {
  const { name, email, DOB, pictures } = props;
  return (
    <tr>
      <th scope="row">
        {/* <img src={pictures.thumbnail}></img> */}
        Pic here
      </th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>DOB</td>
    </tr>
  );
}

export default TableRow;
