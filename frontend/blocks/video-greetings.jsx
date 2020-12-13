import cn from 'classnames'

import styles from './styles/video-greetings.module.sass'


const videos = [
	{ src: "/db/videos/video.mp4", preview: "/db/videos/preview.png" },
	{ src: "/db/videos/video.mp4", preview: "/db/videos/preview.png" },
	{ src: "/db/videos/video.mp4", preview: "/db/videos/preview.png" },
	{ src: "/db/videos/video.mp4", preview: "/db/videos/preview.png" },
]

export default function VideoBlock4 (){
	
	const newVideos = [ ...videos]
	for(let i = 0; i < 15-videos.length; i++)
		newVideos.push({})

	return (
		<div className={cn("h flex-center", styles.container)} >
			<h2>Галерея видеопоздравлений от коллег</h2>
			<div className={cn(styles.videoContainer, "container")}>
				{newVideos.map((item, index) => <Video key={index} {...item}/>)}
			</div>
			<div className={styles.button}>
				<button className="button">Записать видеопоздравление</button>
			</div>
		</div>
	)
}

function Video ({ preview, src }){

	return (
		<button className={cn(styles.video, src && styles.active)} style={preview?{backgroundImage: `url(${preview})` }: {}}>
			<img src="/images/play.svg" alt="Кнопка play"/>
		</button>
	)
}