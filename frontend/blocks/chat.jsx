import { useState } from 'react'
import cn from 'classnames'
import { getChatDate } from 'libs/rus'

import styles from './styles/chat.module.sass'
import videoStyles from './styles/video.module.sass'

const videos = [
	{ src: "/db/videos/video.mp4", preview: "/db/videos/preview.png" },
	{ src: "/db/videos/video.mp4", preview: "/db/videos/preview.png" },
	{ src: "/db/videos/video.mp4", preview: "/db/videos/preview.png" },
	{ src: "/db/videos/video.mp4", preview: "/db/videos/preview.png" },
]

const fields = {
	name: { label: "Имя" },
	surname: { label: "Фамилия" },
	unit: { label: "Подразделение" },
}

export default function ChatBlock (){

	const [ values, setValues ] = useState({})

	const onChange = (obj) => {
		setValues({...values, ...obj})
	}

	const messages = [
		{ name: "Сергей", surname: "Сергеев", unit: "Бухгалтерия", time: Date.now(), text: "Поздравляю!!!" },
		{ name: "Сергей", surname: "Сергеев", unit: "Бухгалтерия", time: Date.now(), text: "Поздравляю!!!" },
		{ name: "Сергей", surname: "Сергеев", unit: "Бухгалтерия", time: Date.now(), text: "Поздравляю!!!" },
		{ name: "Сергей", surname: "Сергеев", unit: "Бухгалтерия", time: Date.now(), text: "Поздравляю!!!" },
		{ name: "Сергей", surname: "Сергеев", unit: "Бухгалтерия", time: Date.now(), text: "Поздравляю!!!" },
		{ name: "Сергей", surname: "Сергеев", unit: "Бухгалтерия", time: Date.now(), text: "Поздравляю!!!" },
		{ name: "Сергей", surname: "Сергеев", unit: "Бухгалтерия", time: Date.now(), text: "Поздравляю!!!" }
	]

	return (
		<div className={cn("h flex-center", videoStyles.gradient, styles.container)} >
			<h2>Поздравительный чат</h2>
			<div className={styles.chat}>
				<div className={styles.chatInner}>
					{messages.map((item, index) => <Message {...item} key={index} />)}
				</div>
			</div>
			<div className={cn(styles.inputArea, "container")}>
				<h3>Ваше поздравление</h3>
				<div className={styles.inputs}>
					<div className={styles.fields}>
						{Object.keys(fields).map(key => (
							<Input {...fields[key]} name={key} key={key} subName="chat" onChange={onChange} value={values[key]}/>
						))}
					</div>
					<Input 
						className={styles.textarea} 
						label="Текст поздравления" 
						name="text" 
						subName="chat" 
						onChange={onChange} 
						value={values.text} 
						area={true}
					/>
					<div className={styles.buttons}>
						<button className={styles.send}><img src="/images/send.svg" alt="Отправить"/></button>
					</div>
				</div>
			</div>
		</div>
	)
}

function Message ({name, surname, unit, time, text}){

	return (
		<div className={styles.message}>
			<div className={styles.avatar}></div>
			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.name}>{name} {surname}</div>
					<div className={styles.unit}>{unit}</div>
					<div className={styles.time}>{getChatDate(time)}</div>
				</div>
				<div className={styles.text}>{text}</div>
			</div>
		</div>
	)
}


function Input ({label, name, subName, onChange, value, area, className}){
	
	const _onChange = (e) => {
		onChange({[name]: e.value})
	}

	return (
		<div className={cn(styles.input, className)}>
			<label htmlFor={subName+"-"+name}>{label}</label>
			{!area?(
				<input id={"#"+subName+"-"+name} name={name} onChange={_onChange} value={value}/>
			):(
				<textarea id={"#"+subName+"-"+name} name={name} onChange={_onChange} value={value}/>
			)}
		</div>
	)
}