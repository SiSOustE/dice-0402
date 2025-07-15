import React, { useState } from 'react';
import './Dice.css';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
  };

  return (
    <div className="dice-container">
      <img
        src={`/images/${diceValue}.svg`}
        alt={`Dice showing ${diceValue}`}
        className="dice-image"
      />
      <button onClick={rollDice} className="dice-button">
        Бросить кубик
      </button>
    </div>
  );
};

export default Dice;