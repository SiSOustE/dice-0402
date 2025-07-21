import React, { useState } from 'react'
import styles from './Dice.module.css' // Теперь импортируем стили как модуль

const Dice = () => {
	const [diceValue, setDiceValue] = useState(1)

	const rollDice = () => {
		const newValue = Math.floor(Math.random() * 6) + 1
		setDiceValue(newValue)
	}

	return (
		<div className={styles.diceContainer}>
			<img
				src={`./images/${diceValue}.svg`}
				alt={`Dice showing ${diceValue}`}
				className={styles.diceImage}
			/>
			<button onClick={rollDice} className={styles.rollButton}>
				Бросить кубик
			</button>
		</div>
	)
}

export default Dice
