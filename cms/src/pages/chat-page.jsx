import React from 'react'
import cn from 'classnames'
import { getTime } from 'libs/rus'

const chatMessages = [
	{ name: "Сергей", surname: "Сергеев", unit: "Бухгалтерия", accepted: true, time: Date.now(), text: "Поздравляю!" },
	{ name: "Сергей", surname: "Сергеев", unit: "Бухгалтерия", rejected: true, time: Date.now() },
	{ name: "Сергей", surname: "Сергеев", unit: "Бухгалтерия", time: Date.now() },
]

export default function ChatPage () {
	return (
		<>
			<header>
				<h1>Поздравления в чате</h1>
			</header>
			<div className="chat-list">
				{chatMessages.map((item, index) => (
					<div className="chat-item" key={index}>
						<div className="avatar"></div>
						<div className="message">
							<div className="header">
								<div className="name">{item.name} {item.surname}</div>
								<div className="unit">{item.unit}</div>
								<div className="time">{getTime(item.time)}</div>
							</div>
							<div className="text">{item.text}</div>
							<div className="buttons">
								{item.accepted?(
									<div className="label green">Одобрено</div>
								):(
									<button className="button-filled">Одобрить</button>
								)}

								{item.rejected?(
									<div className="label red">Запрещено</div>
								):(
									<button className="button-filled red">Запретить</button>
								)}
							</div> 
						</div>
					</div>
				))}
			</div>
		</>
	)
}