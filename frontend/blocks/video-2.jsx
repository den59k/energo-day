import cn from 'classnames'
import { Parallax } from 'components/parallax'

import styles from './styles/video.module.sass'
import Video from 'components/video'


export default function VideoBlock1 ({timing}){

	const videos = [
		{ 
			time: "Повтор будет доступен к просмотру с "+timing.time, 
			id: "ZkpBLFU6sBE" ,
			active: timing.active,
			url: "https://pesk2020.permenergosbyt.ru/3nagrazhdenie.mp4",
			//url: "http://172.16.1.39/3-nagrazhdenie.mp4"
		},
	]
	

	return (
		<div className={cn("h", styles.gradient, "flex-center")} id="video-2">
			<Parallax src="/images/orel.svg" k={-0.3} className={styles.orel}/>
			<h2>Награждение лучших сотрудников</h2>
			<div className={styles.videos}>
				{videos.map((item, index) => (
					<Video key={index} {...item} className="border"/>
				))}
			</div>
		</div>
	)
}