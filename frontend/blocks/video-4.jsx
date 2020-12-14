import cn from 'classnames'
import { Parallax } from 'components/parallax'

import styles from './styles/video.module.sass'
import videoStyles from 'components/video.module.sass'

import Video from 'components/video'

const videos = [
	{ 
		title: "Победители\nпо мнению жюри",
		time: "Результаты доступны в 12.00",
		id: "HOz34_2Z-mw"
	},
	{ 
		title: "Приз зрительских симпатий",
		time: "Результаты доступны в 16.45",
		id: "HOz34_2Z-mw"
	}
]

export default function VideoBlock4 (){

	return (
		<div className={cn("h", styles.gradient, "flex-center")}>
			<Parallax src="/images/salut-4.jpg" k={-0.2} className="cover"/>
			<h2>Праздничные поздравления</h2>
			<div className={styles.videos}>
				{videos.map((item, index) => (
					<Video key={index} {...item} className={cn("border", videoStyles.smallTitle)}/>
				))}
			</div>
		</div>
	)
}