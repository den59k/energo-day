import cn from 'classnames'
import { Parallax } from 'components/parallax'

import styles from './styles/video.module.sass'
import Video from 'components/video'

const videos = [
	{ time: "Повтор будет доступен к просмотру с 12.00", id: "ZkpBLFU6sBE"  },
]

export default function VideoBlock1 (){

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