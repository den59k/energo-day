import cn from 'classnames'

import styles from './video.module.sass'

export default function Video ({time, description, title, className, style}) {

	const _title = title || "С днём энергетика!"

	return (
		<div className={styles.videoContainer}>
			<div className={cn(styles.video, className)} style={style}>
				<div className={styles.title}>{_title}</div>
				<div className={styles.time}>{time}</div>
			</div>
			{description && (
				<div className={styles.description}>{description}</div>
			)}
		</div>
	)
}