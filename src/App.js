import React, { useState } from "react";
import Card from "./Card";
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
  const[choiceOne,setChoiceOne]=useState(null)
  const[choiceTwo,setChoiceTwo]=useState(null)

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
          return <Card  key={card.id} card={card}/>;
        })}
      </div>
    </div>
  );
}

export default App;
