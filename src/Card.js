import React from 'react'

const Card = ({cards}) => {
  return (
    <div className="card-grid">
        {cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <div>
                <img src={card.src} alt="front of the card" className="front" />
                <img
                  src="/img/cover.png"
                  alt="back of the card"
                  className="back"
                />
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default Card