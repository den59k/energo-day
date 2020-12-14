import React from 'react'
import cn from 'classnames'

import { modal, ModalBase } from './index'

export function ModalVideo({item}){

	return (
		<ModalBase title="Видео-поздравление">
			<div className="content">
				<video src={item.src} alt="Видеоролик" autoPlay={true} controls={true}/>
			</div>
			<div className="buttons" style={{justifyContent: 'center'}}>
				
				{item.accepted?(
					<div className="label green m">Одобрено</div>
				):(
					<button className="button-filled m">Одобрить</button>
				)}
				{item.rejected?(
					<div className="label red m">Запрещено</div>
				):(
					<button className="button-filled red m">Запретить</button>
				)}
			</div>
		</ModalBase>
	)
}

export function openModalVideo(item){
	modal.open(<ModalVideo item={item}/>)
}