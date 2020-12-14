import cn from 'classnames'
import { openYoutubeModal } from 'components/modal-window'

import styles from './video.module.sass'

export default function Video ({time, description, title, className, style, id}) {

	const _title = title || "С днём энергетика!"

	const openVideo = () => {				//Потом здесь заморочим валидацию
		openYoutubeModal(id)
	}

	return (
		<div className={styles.videoContainer}>
			<button className={cn(styles.video, className)} style={style} onClick={openVideo}>
				<div className={styles.title}>{_title}</div>
				<div className={styles.time}>{time}</div>
				<img src="/images/play.svg" alt="Play"/>
			</button>
			{description && (
				<div className={styles.description}>{description}</div>
			)}
		</div>
	)
}