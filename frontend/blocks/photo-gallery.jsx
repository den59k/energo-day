import cn from 'classnames'
import { Parallax } from 'components/parallax'

import styles from './styles/photo-gallery.module.sass'

import { openMakePhotoModal } from 'components/modal-window'

const photos = [
	{ src: "/db/photos/test.jpg", preview: "/db/photos/preview.jpg" },
	{ src: "/db/photos/test.jpg", preview: "/db/photos/preview.jpg" },
	{ src: "/db/photos/test.jpg", preview: "/db/photos/preview.jpg" },
	{ src: "/db/photos/test.jpg", preview: "/db/photos/preview.jpg" },
	{ src: "/db/photos/test.jpg", preview: "/db/photos/preview.jpg" },
	{ src: "/db/photos/test.jpg", preview: "/db/photos/preview.jpg" },
]

function getPhotos(photos, start, end){

	const arr = photos.slice(start, end).map((item, index) => (
		<button key={index} className={styles.photo} style={{backgroundImage: `url(${item.preview})`}}></button>
	))
	
	const len = arr.length
	for(let i = len; i < end-start; i++)
		arr.push( <div key={i} className={styles.photo}></div> )

	return arr;
}

export default function PhotoGallery (){	

	const onMakePhoto = () => {
		openMakePhotoModal()
	}

	return (
		<div className={cn("h flex-center", styles.container)} id="make-photo">
			
			<h2>Праздничная фотогалерея</h2>
			<div className={cn(styles.photoContainer, "container")}>
				<div className={styles.photos}>{getPhotos(photos, 0, 8)}</div>
				<div className={styles.bigImage} style={photos[0]?{backgroundImage: `url(${photos[0].src})`}:{}}></div>
				<div className={styles.photos}>{getPhotos(photos, 8, 16)}</div>
			</div>
			<div className={styles.button}>
				<button className="button" onClick={onMakePhoto}>Сделать праздничное фото</button>
			</div>
			<Parallax src="/images/salut-3.jpg" k={-0.3} className="cover z-1"/>
		</div>
	)
}