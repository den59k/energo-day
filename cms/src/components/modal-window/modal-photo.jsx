import React from 'react'
import cn from 'classnames'

import { modal, ModalBase } from './index'

export function ModalPhoto({item}){

	return (
		<ModalBase title="Фото-поздравление">
			<div className="content">
				<img src={item.src} alt="Изображение"/>
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

export function openModalPhoto(item){
	modal.open(<ModalPhoto item={item}/>)
}