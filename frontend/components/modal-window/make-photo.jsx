import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { modal } from './index'

import styles from './modal.module.sass'

function MakePhotoModal (){

	const videoRef = useRef()
	const [ mode, setMode ] = useState('')
	const [ stream, setStream ] = useState(null)

	useEffect(() => {
		setTimeout(() => setMode(mode => mode===''?'permission': mode), 500)
		navigator.mediaDevices.getUserMedia({ audio: true, video: { width: 1280, height: 720 } })
		.then(stream => {
			videoRef.current.srcObject = stream
			videoRef.current.play()
			setStream(stream)
			setMode('accepted')

			modal.onClose = () => stream.getTracks().forEach(track => track.stop())

		}).catch(err => setMode('not-accepted'))

	}, [])

	return (
		<div className={cn(styles.modal, styles.makePhoto)}>
			{mode === 'permission' && <div className={styles.label}>Дайте разрешение на использование камеры</div>}
			<video ref={videoRef} style={stream?{}: {display: 'none'}}></video>
			<div className={styles.panel}>
				{mode === 'accepted' && <button className="button">Сфотографировать</button>}
			</div>
		</div>
	)
}

export function openMakePhotoModal (){
	modal.open(<MakePhotoModal/>)
}