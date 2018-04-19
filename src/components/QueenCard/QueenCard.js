import React from "react";
import "./QueenCard.css";

const QueenCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={()=> props.onClickHandler(props.id)}/>
    </div>
  </div>
);

export default QueenCard;