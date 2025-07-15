import React from 'react';
import Dice from './Dice/Dice' // ✅ Путь обновлён

export default function App() {
  return (
    <div className="app">
      <h1 className="title">Игральная кость</h1>
      <Dice />
    </div>
  );
}