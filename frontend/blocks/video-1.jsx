import { useRef } from 'react'
import cn from 'classnames'
import { Parallax } from 'components/parallax'

import styles from './styles/video.module.sass'
import Video from 'components/video'



export default function VideoBlock1 ({timing}){

	
	const videos = [
		{ 
			time: "Повтор будет доступен к просмотру с "+timing.time, 
			description: "Поздравление\nГенерального Директора ПАО «Пермэнергосбыт»\nИгоря Валерьевича Шершакова",
			id: "cPJ4KwS9YHc",
			active: timing.active,
			url: "https://pesk2020.permenergosbyt.ru/1gendirector.mp4"
			//url: "http://172.16.1.39/1-gen-director.mp4"
		},
		{ 
			time: "Повтор будет доступен к просмотру с "+timing.time, 
			description: "Поздравление\nколлектива «Пермэнергосбыт» с Днем Энергетика\nот ТОП менеджеров компании",
			id: "gqhJ-RiqbAQ",
			active: timing.active,
			url: "https://pesk2020.permenergosbyt.ru/2topmanagers.mp4"
			//url: "http://172.16.1.39/2-top-managers.mp4"
		}
	]

	return (
		<div className={cn("h", styles.gradient, "flex-center")} id="video-1">
			<h2>Праздничные поздравления</h2>
			<div className={styles.videos}>
				{videos.map((item, index) => (
					<Video key={index} {...item} className="border"/>
				))}
			</div>
			<Parallax src="/images/confetti-1.png" k={1}/>
			<Parallax src="/images/confetti-2.png" k={0.2}/>
		</div>
	)
}