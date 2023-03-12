import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set4`}
        alt="monster"
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.address.city}</p>
    </div>
  );
};

export default Card;
