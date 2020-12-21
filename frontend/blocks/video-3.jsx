import cn from 'classnames'
import { Parallax } from 'components/parallax'

import styles from './styles/video.module.sass'
import Video from 'components/video'


export default function VideoBlock3 ({timing}){
	const videos = [
		{ 
			title: "Трансляция розыгрыша", 
			time: "Результаты доступны в "+timing.time,
			id: "HOz34_2Z-mw",
			active: timing.active
		}
	]
	
	return (
		<div className={cn("h", styles.gradient, "flex-center")} id="video-3">
			<Parallax src="/images/salut-3.jpg" k={-0.3} className="cover"/>
			<h2>Розыгрыш супер-приза</h2>
			<div className={styles.videos}>
				{videos.map((item, index) => (
					<Video key={index} {...item} className="border"/>
				))}
			</div>
		</div>
	)
}