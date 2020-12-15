import { times } from 'lodash'
import { useState, useEffect } from 'react'

import styles from './firework.module.sass'

let counter = 0
export default function Firework ({play}){

	const [ state, setState ] = useState([])

	useEffect(() => {
		if(!play) return

		const arr = [];
		for(let i = 0; i < 30; i++)
			arr.push({src: `/images/firework/${Math.floor(Math.random()*4)+1}.png`, style: {
				transform: `rotate(${Math.random()*50-25}deg)`
			}, id: counter++})
		setState(arr)

		setTimeout(() => {
			setState(arr.map(item => ({...item, style: {
				transform: `rotate(${Math.random()*50-25}deg) translate(${(Math.random()-0.5)*1000}px, ${(Math.random()-0.8)*600}px)`, 
				opacity: 0
			} }) ))
		}, 10)

		const timeout = setTimeout(() => setState([]), 1200)

		return () => clearTimeout(timeout)
	}, [play])

	return (
		<div className={styles.container}>
			{state.map((item, index) => (
				<img key={item.id} src={item.src} alt="Блестяшка" style={item.style}/>
			))}
		</div>
	)
}