import cn from 'classnames'

import styles from './styles/vote.module.sass'
import videoStyles from 'components/video.module.sass'

import Video from 'components/video'

const clips = [
	{ title: "Центральное отделение" },
	{ title: "Мотовилихинское отделение" },
	{ title: "Закамское отделение" },
	{ title: "Северное отделение" },
	{ title: "Южное отделение" },
	{ title: "Кудымкарское отделение" },
	{ title: "Очерское отделение" },
	{ title: "Губахинское отделение" },
	{ title: "Кунгурское отделение" },
	{ title: "Чусовское отделение" },
	{ title: "Отдел интеллектуальных систем учета" },
	{ title: "Управление оптового рынка" },
	{ title: "Бухгалтерия" },
]

const time = "Голосование продлится с 12.00 до 16.00"

export default function Vote(){
	
	return (
		<div>
			<h2>Голосование за лучший видеоролик к дню энергетика (до 16.00)</h2>
			<ul className={cn(styles.votes, "container")}>
				{clips.map((item, index) => (
					<li key={index}>
						<Video title={item.title} className={videoStyles.small} time={time}/>
						<div className={styles.description}>Описание ролика</div>
						<button className="button"><img src="/images/like.svg"/>Проголосовать</button>
					</li>
				))}			
			</ul>
		</div>
	)
}