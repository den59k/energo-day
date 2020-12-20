import { useRef } from 'react'
import cn from 'classnames'
import { Parallax } from 'components/parallax'

import styles from './styles/video.module.sass'
import Video from 'components/video'

const videos = [
	{ 
		time: "Повтор будет доступен к просмотру с 12.00", 
		description: "Поздравление\nГенерального Директора ПАО «Пермэнергосбыт»\nИгоря Валерьевича Шершакова",
		id: "cPJ4KwS9YHc" 
	},
	{ 
		time: "Повтор будет доступен к просмотру с 12.00", 
		description: "Поздравление\nколлектива «Пермэнергосбыт» с Днем Энергетика\nот ТОП менеджеров компании",
		id: "gqhJ-RiqbAQ" 
	}
]

export default function VideoBlock1 (){

	return (
		<div className={cn("h", styles.gradient, "flex-center")} id="video-1">
			<h2>Праздничные поздравления</h2>
			<div className={styles.videos}>
				{videos.map((item, index) => (
					<Video key={index} url="http://172.16.0.68/01-severnoe.mp4" className="border"/>
				))}
			</div>
			<Parallax src="/images/confetti-1.png" k={1}/>
			<Parallax src="/images/confetti-2.png" k={0.2}/>
		</div>
	)
}