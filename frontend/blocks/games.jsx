import { useState } from 'react'

import cn from 'classnames'

import styles from './styles/games.module.sass'

import Barley from 'components/games/barley'
import Pair from 'components/games/pair'
import Firework from 'components/firework'


export default function GameBlock (){
	
	const [ activeGame, setActiveGame ] = useState(0)
	const [ fireworkPlay, setFireworkPlay ] = useState(false)
	
	const slide = (inc) => {
		const newActiveGame = activeGame+inc
		if(newActiveGame < 0 || newActiveGame >= games.length) return 

		setActiveGame(newActiveGame)
	}

	const onWin = () => {
		setFireworkPlay(true)
		setTimeout(() => setFireworkPlay(false), 1000)
	}

	const games = [
		{ 
			title: "Пятнашки", 
			sub: "Соберите картинку", 
			component: <Barley src="/images/barley-image.jpg" onWin={onWin} className={cn(styles.game)}/> 
		},
		{ 
			title: "Найди пару", 
			sub: "Найдите одинаковые пары фотографий", 
			component: <Pair onWin={onWin} className={cn(styles.game)}/>
		}
	]
	
	return (
		<div className={cn("h flex-between", styles.container)} id="games">
			<Firework play={fireworkPlay}/>
			<h2>Игротека</h2>
			<div className={cn(styles.gameContainer, "container")}>
				{games.map((item, index) => (
					<div key={index} className={cn(activeGame < index && styles.hideLeft, activeGame > index && styles.hideRight)}>
						<h3>Игра «{item.title}»</h3>
						<div className={styles.sub}>{item.sub}</div>
						{item.component}
					</div>
				))}

				<button className={cn(styles.leftArrow, activeGame === 0 && styles.hide)} onClick={() => slide(-1)}>
					<img src="/images/arrow-left.svg" alt="Стрелка влево"/>
					Листать
				</button>
				<button className={cn(styles.rightArrow, activeGame === games.length-1 && styles.hide)} onClick={() => slide(1)}>
					Листать
					<img src="/images/arrow-left.svg" alt="Стрелка вправо"/>
				</button>
			</div>

		</div>
	)
}
