import cn from 'classnames'
import { Parallax } from 'components/parallax'

import styles from './styles/video.module.sass'
import Video from 'components/video'

const videos = [
	{ time: "Повтор будет доступен к просмотру с 12.00", id: "HOz34_2Z-mw"  },
]

export default function VideoBlock1 (){

	return (
		<div className={cn("h", styles.gradient, "flex-center")}>
			<Parallax src="/images/orel.svg" k={-0.3}/>
			<h2>Награждение лучших сотрудников</h2>
			<div className={styles.videos}>
				{videos.map((item, index) => (
					<Video key={index} {...item} className="border"/>
				))}
			</div>
		</div>
	)
}