import cn from 'classnames'
import { Parallax } from 'components/parallax'

import styles from './styles/video.module.sass'
import videoStyles from 'components/video.module.sass'

import Video from 'components/video'


export default function VideoBlock4 ({timing1, timing2}){
		
	const videos = [
		{ 
			title: "Победители\nпо мнению жюри",
			time: "Результаты доступны в "+timing1.time,
			active: timing1.active,
			id: "HOz34_2Z-mw"
		},
		{ 
			title: "Приз зрительских симпатий",
			time: "Результаты доступны в "+timing2.time,
			active: timing2.active,
			id: "HOz34_2Z-mw"
		}
	]

	return (
		<div className={cn("h", styles.gradient, "flex-center")} id="video-4">
			<Parallax src="/images/salut-4.jpg" k={-0.2} className="cover"/>
			<h2>Поздравляем наших победителей</h2>
			<div className={styles.videos}>
				{videos.map((item, index) => (
					<Video key={index} {...item} className={cn("border", videoStyles.smallTitle)}/>
				))}
			</div>
		</div>
	)
}