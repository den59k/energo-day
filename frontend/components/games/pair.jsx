import { useEffect, useState } from 'react'
import _ from 'lodash'
import cn from 'classnames'

import styles from './pair.module.sass'

const images = []
for(let i = 1; i <= 9; i++){
	images.push({ src: "/images/memo/"+i+".jpg", image: i-1 })
	images.push({ src: "/images/memo/"+i+".jpg", image: i-1 })
}

export default function Pair({className}){

	const [ opened, setOpened ] = useState([])
	const [ tempOpened, setTempOpened ] = useState(-1)
	const [ shuffle, setShuffle ] = useState([])

	useEffect(() => {
		setShuffle(_.shuffle(images))
	}, [])

	const playAgain = () => {
		setOpened([])
		setTempOpened(-1)
		setTimeout(() => {
			setShuffle(_.shuffle(images))
		}, 500)
	}

	const open = (item, index) => {
		if(index === tempOpened) return
		if(tempOpened >= 0 && item.image === shuffle[tempOpened].image){
			setOpened([...opened, item.image])
			setTempOpened(-1)
		}else
			setTempOpened(index)
	}

	return (
		<div className={className}>
			<div className={styles.container}>
				{shuffle.map((item, index) => (
					<button 
						key={index} 
						className={cn(styles.item, (opened.includes(item.image) || tempOpened === index) && styles.opened)} 
						onClick={() => open(item, index)}
					>
						<div className={styles.avers} style={{backgroundImage: `url(${item.src})`}}></div>
						<div className={styles.revers}></div>
					</button>
				))}
			</div>
			<button onClick={playAgain} className={cn("button", styles.button, (opened.length < images.length/2) &&  styles.hide)}>
				Играть заново
			</button>
		</div>
	)

}