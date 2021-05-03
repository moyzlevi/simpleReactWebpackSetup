import React from "react";
import "./Card.css";

export default () => {
  const timeElaps = Date.now();
  const today = new Date(timeElaps);

  return (
    <div className="card-body">
      <div className="card-header noselect">{today.toLocaleDateString()}</div>
      <div className="gridbox content">
        <div className="photo">photo</div>
        <div className="main-text">text</div>
      </div>
    </div>
  );
};
