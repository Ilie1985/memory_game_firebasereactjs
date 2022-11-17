import React from "react";
import "./Card.css";

const Card = ({ card }) => {

const handleClick=()=>{
  
}




  return (
    <div className="card" >
              <div>
                <img src={card.src} alt="front of the card" className="front" />
                <img
                  src="/img/cover.png"
                  alt="back of the card"
                  className="back"
                  onClick={handleClick}
                />
              </div>
            </div>
  );
};

export default Card;
