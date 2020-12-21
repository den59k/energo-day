import cn from 'classnames'
import { openRecordModal, openVideoModal, closeModal } from 'components/modal-window'
import { mutate } from 'swr'
import { useEffect, useState } from 'react'

import styles from './styles/video-greetings.module.sass'

function getVideos(videos, start, count){

	const arr = []
	for(let i = start; i < start+count; i++)
		if(videos[i])
			arr.push(videos[i])
		else
			arr.push({})
	
	return arr
}

export default function VideoGreetingsBlock ({videos}){
	
	const [ count, setCount ] = useState(15)
	const [ page, setPage ] = useState(0)

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

	const onClickRecord = () => {
		openRecordModal(async (blob) => {
			const json = await fetch('/api/videos/upload', {
				method: 'POST',
				body: blob
			})
			const resp = await json.json()
			mutate('/api')
			if(videos.length >= count)
				setPage(Math.floor((videos.length+1)/count))
			closeModal()
		})
	}

	const onClickItem = (src) => {
		if(src)
			openVideoModal(src)
	}

	const slide = (inc) => {
		const newPage = page + inc
		if(newPage < 0 || newPage*count >= videos.length) return

		setPage(newPage)
	}

	return (
		<div className={cn("h flex-center", styles.container)} id="greetings">
			<h2>Галерея видеопоздравлений от коллег</h2>
			<div className={cn(styles.videoContainer, "container")}>
				{getVideos(videos, page*count, count).map((item, index) => <Video key={index} {...item} onClickItem={onClickItem}/>)}
				<button className={cn(styles.arrowLeft, page === 0 && styles.hide)} onClick={() => slide(-1)}></button>
				<button className={cn(styles.arrowRight, count*(page+1) >= videos.length && styles.hide)} onClick={() => slide(1)}></button>
			</div>
			<div className={styles.button}>
				<button className="button" onClick={onClickRecord}>Записать видеопоздравление</button>
			</div>
		</div>
	)
}

function Video ({ preview, src, onClickItem, transcoded}){
	
	return (
		<button 
			onClick={() => onClickItem(transcoded || src)}
			className={cn(styles.video, src && styles.active)} 
			style={preview?{backgroundImage: `url(${preview})` }: {}}
		>
			<img src="/images/play.svg" alt="Кнопка play"/>
		</button>
	)
}