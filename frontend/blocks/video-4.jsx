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
			id: "zvOR5BiCZ3s",
			url: "https://pesk2020.permenergosbyt.ru/pobediteli.mp4"
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
				
				<Video {...videos[0]} className={cn("border", videoStyles.smallTitle)}>
					{timing1.active && <a download="Таблица результатов" href="/images/table.xlsx" className={styles.title}>
						Скачать таблицу результатов
					</a>}
				</Video>
				<Video {...videos[1]} className={cn("border", videoStyles.smallTitle)}></Video>
				
			</div>
		</div>
	)
}