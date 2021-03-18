import "./style.css";
import React from "react";

function Card(props) {
  //   console.log(props.results[0].email, "  FROM CARD");

  //   const obj = props.results[0];
  //   const { name, email, picture } = obj;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="{picture.thumbnail}" alt="..." />
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
