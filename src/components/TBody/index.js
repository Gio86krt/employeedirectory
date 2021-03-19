import React from "react";
import TableRow from "../TableRow/TableRow";

function TBody(props) {
  return (
    <tr>
      <TableRow props={props} />
    </tr>
  );
}

export default TBody;
