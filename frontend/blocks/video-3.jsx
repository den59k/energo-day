import cn from 'classnames'
import { Parallax } from 'components/parallax'

import styles from './styles/video.module.sass'
import Video from 'components/video'

const videos = [
	{ title: "Трансляция розыгрыша", time: "Результаты доступны в 12.00" },
]

export default function VideoBlock3 (){

	return (
		<div className={cn("h", styles.gradient, "flex-center")} >
			<Parallax src="/images/salut-3.jpg" k={-0.3} className="cover"/>
			<h2>Награждение лучших сотрудников</h2>
			<div className={styles.videos}>
				{videos.map((item, index) => (
					<Video key={index} {...item} className="border"/>
				))}
			</div>
		</div>
	)
}