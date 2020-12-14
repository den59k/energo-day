import React from 'react'
import cn from 'classnames'
import { getTime } from 'libs/rus'

import { openModalVideo } from 'components/modal-window'
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io'

const videos = [
	{ src: "/db/videos/video.mp4", preview: "/db/videos/preview.png", accepted: true },
	{ src: "/db/videos/video.mp4", preview: "/db/videos/preview.png", rejected: true },
	{ src: "/db/videos/video.mp4", preview: "/db/videos/preview.png" },
]

export default function VideoPage () {

	const onClickItem = (item) => {
		openModalVideo(item)
	}

	return (
		<>
			<header>
				<h1>Видео-поздравления</h1>
			</header>
			<div className="block-list">
				{videos.map((item, index) => (
					<button className={cn("item", item.rejected && "rejected")} key={index} onClick={() => onClickItem(item)}>
						<img src={item.preview} alt="Превью-видео"/>
						<div className="icons">
							{ item.accepted && <IoIosCheckmarkCircle/> }
							{ item.rejected && <IoIosCloseCircle color="red"/> }
						</div>
					</button>
				))}
			</div>
		</>
	)
}