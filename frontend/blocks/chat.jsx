import { useEffect, useRef, useState } from 'react'
import useSWR, { mutate } from 'swr'
import cn from 'classnames'
import { getChatDate } from 'libs/rus'
import { GET, REST } from 'libs/fetch'
import loadFile from 'libs/file-loader'

import styles from './styles/chat.module.sass'
import videoStyles from './styles/video.module.sass'


const fields = {
	name: { label: "Имя", className: styles.double },
	surname: { label: "Фамилия", className: styles.double },
	unit: { label: "Подразделение" },
}

export default function ChatBlock ({messages}){
	
	const [ values, setValues ] = useState({})
	const [ disable, setDisable ] = useState(false)

	const chatRef = useRef()
	const fileRef = useRef()

	const length = messages.length

	useEffect(() => {
		chatRef.current.scrollTop = 9999
	}, [length])	

	const onChange = (obj) => {
		setValues({...values, ...obj})
	}

	const onSubmit = async () => {
		if(disable) return
		setDisable(true)
	
		const response = await REST('/api/chat', values)

		setDisable(false)
		onChange({text: ""})
		mutate('/api')
	}

	const onFileChange = async (e) => {
		const file = e.target.files[0]
		if(!file) return
		e.target.value = ""

		const body = await loadFile(file)
		const headers = { 'Content-Type': file.type };

		const json = await fetch('/api/chat/upload', { method: 'POST', headers, body } )
		const resp = await json.json()
		
		if(resp.error) return
	
		onChange({avatar: resp.src})
	}

	return (
		<div className={cn("h flex-center", videoStyles.gradient, styles.container)} id="chat">
			<input onChange={onFileChange} ref={fileRef} type="file" accept="image/*" style={{display: "none"}}/>
			<h2>Поздравительный чат</h2>
			<div className={styles.chat}>
				<div className={styles.chatInner} ref={chatRef}>
					{messages && messages.map((item, index) => <Message {...item} key={index} />)}
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
						{values.avatar?(
							<button 
								className={styles.avatarButton} 
								onClick={() => fileRef.current.click()} 
								style={{backgroundImage: `url(${values.avatar})`}}
							></button>
						):(
							<button className={styles.photoButton} onClick={() => fileRef.current.click()}>
								<img src="/images/icons/photo.svg" alt="Сделать фото"/>
							</button>
						)}
						<button className={styles.send} disabled={disable} onClick={onSubmit}>
							<img src="/images/send.svg" alt="Отправить"/>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

function Message ({name, surname, unit, time, text, avatar}){

	return (
		<div className={styles.message}>
			<div className={styles.avatar} style={avatar?{backgroundImage: `url(${avatar})`}:{}}></div>
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
		onChange({[name]: e.currentTarget.value})
	}

	return (
		<div className={cn(styles.input, className)}>
			<label htmlFor={subName+"-"+name}>{label}</label>
			{!area?(
				<input id={"#"+subName+"-"+name} name={name} onChange={_onChange} value={value || ""}/>
			):(
				<textarea id={"#"+subName+"-"+name} name={name} onChange={_onChange} value={value || ""}/>
			)}
		</div>
	)
}