import React from 'react';
import Dice from './components/Dice'

export default function App() {
  return (
    <div className="app">
      <h1 className="title">Игральная кость</h1>
      <Dice /> {/* Теперь это работает */}
    </div>
  );
}