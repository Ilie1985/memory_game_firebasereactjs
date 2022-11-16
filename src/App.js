import React, { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // the function generates the duplicate of cardImages  ,it shuffles the images in the array with sort()
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => {
        return Math.random() - 0.5;
      })
      .map((item) => {
        return { ...item, id: Math.random() };
      });

    setCards(shuffleCards);
    setTurns(0);
  };
  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

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
    </div>
  );
}

export default App;
