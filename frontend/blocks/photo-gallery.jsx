import { useState, useEffect } from 'react'
import cn from 'classnames'
import { Parallax } from 'components/parallax'
import useSWR, { mutate } from 'swr'

import styles from './styles/photo-gallery.module.sass'

import { openMakePhotoModal, closeModal } from 'components/modal-window'


function getPhotos(photos, start, end, onPhotoClick){
	if(!photos) return []
	const arr = photos.slice(start, end).map((item, index) => (
		<button 
			key={index} 
			className={styles.photo} 
			onClick={() => onPhotoClick(start+index)}
			style={{backgroundImage: `url(${item.preview})`}}
		></button>
	))
	
	const len = arr.length
	for(let i = len; i < end-start; i++)
		arr.push( <div key={i} className={styles.photo} style={{backgroundImage: `url(/images/avers.svg)`}}></div> )

	return arr;
}

export default function PhotoGallery ({photos}){	

	const [ currentPhoto, setCurrentPhoto ] = useState(0)
	const [ mobileBigPhoto, setMobileBigPhoto ] = useState(false)
	const [ count, setCount ] = useState(15)
	const [ page, setPage ] = useState(0)

	const onMakePhoto = () => {
		openMakePhotoModal(async (buffer) => {
			const json = await fetch('/api/photos/upload', { method: 'POST', body: buffer })
			const response = await json.json()
			mutate('/api')

			if(photos.length >= count*2)
				setPage(Math.floor((photos.length)/count/2)*2)

			setCurrentPhoto(photos.length)

			closeModal()
		})
	}	

	useEffect(() => {
		const resize = () => {
			if(document.documentElement.clientWidth > 1200)
				return setCount(9)
			if(document.documentElement.clientWidth > 950)
				return setCount(6)

			if(document.documentElement.clientWidth > 770)
				return setCount(9)

			if(document.documentElement.clientWidth > 450)
				return setCount(8)

			return setCount(10)
		}

		resize()
		window.addEventListener('resize', resize)
		return () => window.removeEventListener('resize', resize)
	}, [])

	const onPhotoClick = (index) => {
		setMobileBigPhoto(true)
		setCurrentPhoto(index)
	}

	const slide = (inc) => {
		const newPage = page + inc
		if(newPage < 0 || newPage*count >= photos.length) return

		setPage(newPage)
	}

	return (
		<div className={cn("h flex-center", styles.container)} id="make-photo">
			
			<h2>Праздничная фотогалерея</h2>
			<div className={cn(styles.photoContainer, "container")}>
				<div className={cn(styles.photos, styles.left)}>{getPhotos(photos, page*count, (page+1)*count, onPhotoClick)}</div>

				<div 
					className={cn(styles.bigImage, mobileBigPhoto && styles.open)} 
					style={{backgroundImage: `url(${photos[currentPhoto]?photos[currentPhoto].src: '/images/avers.svg'})`}}
				>
					<button className={styles.close} onClick={() => setMobileBigPhoto(false)}></button>
				</div>

				<div className={cn(styles.photos, styles.right)}>{getPhotos(photos, (page+1)*count, (page+2)*count, onPhotoClick)}</div>
			</div>
			<div className={styles.button}>
				<button className={cn(styles.leftButton, page === 0 && styles.hide)} onClick={() => slide(-2)}></button>
				<button className="button" onClick={onMakePhoto}>Сделать праздничное фото</button>
				<button className={cn(styles.rightButton, count*(page+2) >= photos.length && styles.hide)} onClick={() => slide(2)}></button>
			</div>
			<Parallax src="/images/salut-3.jpg" k={-0.3} className="cover z-1"/>
		</div>
	)
}