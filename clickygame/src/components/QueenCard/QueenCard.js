import React from "react";
import "./QueenCard.css";

const QueenCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    {/* <span onClick={()=> props.shuffleQueens(props.id)} className="remove">𝘅</span> */}
  </div>
);

export default QueenCard;