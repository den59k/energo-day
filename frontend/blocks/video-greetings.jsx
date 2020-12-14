import cn from 'classnames'
import { openRecordModal, openVideoModal, closeModal } from 'components/modal-window'
import { mutate } from 'swr'
import { useEffect, useState } from 'react'

import styles from './styles/video-greetings.module.sass'


export default function VideoGreetingsBlock ({videos}){
	
	const [ count, setCount ] = useState(15)
	const newVideos = [ ...videos]

	useEffect(() => {
		const resize = () => {
			if(document.documentElement.clientWidth < 550)
				setCount(8)
			else
				setCount(15)
		}

		resize()
		window.addEventListener('resize', resize)
		return () => window.removeEventListener('resize', resize)
	}, [])

	for(let i = 0; i < count-videos.length; i++)
		newVideos.push({})

	const onClickRecord = () => {
		openRecordModal(async (blob) => {
			const json = await fetch('/api/videos/upload', {
				method: 'POST',
				body: blob
			})
			const resp = await json.json()
			mutate('/api')
			closeModal()
		})
	}

	const onClickItem = (src) => {
		openVideoModal(src)
	}

	return (
		<div className={cn("h flex-center", styles.container)} id="greetings">
			<h2>Галерея видеопоздравлений от коллег</h2>
			<div className={cn(styles.videoContainer, "container")}>
				{newVideos.map((item, index) => <Video key={index} {...item} onClickItem={onClickItem}/>)}
			</div>
			<div className={styles.button}>
				<button className="button" onClick={onClickRecord}>Записать видеопоздравление</button>
			</div>
		</div>
	)
}

function Video ({ preview, src, onClickItem}){

	return (
		<button 
			onClick={() => onClickItem(src)}
			className={cn(styles.video, src && styles.active)} 
			style={preview?{backgroundImage: `url(${preview})` }: {}}
		>
			<img src="/images/play.svg" alt="Кнопка play"/>
		</button>
	)
}