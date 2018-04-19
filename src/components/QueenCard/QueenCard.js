import React from "react";
import "./QueenCard.css";

const QueenCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={()=> props.onClickHandler(props.id)}/>
    </div>
    {/* on click event to shuffle cards on each click */}
    {/* <span onClick={()=> props.shuffleCards(props.id)} {props.image </span> */}
  </div>
);

export default QueenCard;