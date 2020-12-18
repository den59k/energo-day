import cn from 'classnames'
import { modal } from './index'

import styles from './modal.module.sass'

function VideoModal ({src}){

	return (
		<div className={cn(styles.modal, styles.video)}>
			<button onClick={modal.close} className={styles.closeButton}><img src="/images/icons/close.svg" alt="Закрыть окно"/></button>
			<video src={src} controls={true} autoPlay={true}/>
		</div>
	)
}

export function openVideoModal (src){
	modal.open(<VideoModal src={src}/>)
}