import cn from 'classnames'
import { REST } from 'libs/fetch'
import { mutate } from 'swr'

import styles from './styles/vote.module.sass'
import videoStyles from 'components/video.module.sass'

import Video from 'components/video'

const clips = [
	{ 
		title: "Северное отделение", 
		description: "Северное отделение представляет вашему\nвниманию короткометражный фильм\n«Оплати долги и живи спокойно».",
		id: "uEaouwm3ebA"
	},
	{ 
		title: "Губахинское отделение", 
		description: "Мы представляем Вашему вниманию\nвидеоролик об увлечениях сотрудников\nГубахинского отделения",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Закамское отделение", 
		description: "Ролик называется «Где денег взять?».\nДля достижения цели все способы хороши\nи наша дружная команда\nЗакамского отделения готова на все. ",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Отдел Интеллектуальных систем учета", 
		description: "Отдел Интеллектуальных систем учета -\nэто небольшое, но очень интеллектуальное\nподразделение ПАО «Пермэнергосбыт».\nКак Прометей несет свет и тепло, а также\nприборы учета в каждый дом.\nНаш  фильм – это небольшая иллюстрация вышесказанного.",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Бухгалтерия", 
		description: "Наша Бухгалтерия – это: команда красивых,\nактивных, успешных девушек, золотое звено\nв крепкой цепи финансово-экономических\nпроцессов Компании. Что ни говори, а\nБухгалтерия – это уникальные шестеренки,\nс помощью которых «Пермэнергосбыт»\nработает как Кремлевские Куранты!!!\nС боем и вовремя!",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Кунгурское отделение", 
		description: "«Пермэнергосбыт» представляет!\nВ 2020 году они трудились как пчелы!\nСловно мед собирали оплату с населения\nв общую копилку компании.\nОбеспечивали светом и теплом свой город!\nИ сейчас они заслужили возможность\nпоздравить всех праздником.\nВстречайте: Самые трудолюбивые и\nэнергичные пчелы Кунгура,\nв новом блокбастере «Энерготоки»!",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Южное отделение", 
		description: "Наш ролик посвящен шуточной ситуации,\nсложившейся в День Энергетика.\nДанным видеороликом мы хотели передать\nважность праздничного настроения\nв большом коллективе!",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Очерское отделение", 
		description: "Наш видеоролик о буднях Очерского Отделения:\nутро начинается с замера температуры,\nобед - за ЗОЖ, все оперативки\nо выполнении планов и прибыли,\nа мечты работников о крупной премии.",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Чусовское отделение", 
		description: "Надеемся вы нас поймёте,\nСмотря наш фильм с улыбкой на лице,\nЧто свет вы каждый день не просто продаёте,\nА светит он у каждого в душе!!!",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Управление оптового рынка", 
		description: "В видеоролике представлена часть\nрабочего процесса (в шутливой форме) и\nотражено, что сотрудники любят\nсвою профессию и гордятся работой\nв нашей Компании.",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Центральное отделение", 
		description: "С днем Энергетика и Новым годом\nпоздравляет коллектив\nЦентрального отделения\nПАО «Пермэнергосбыт»,\nблагодаря работе которого, жителей радует\nГлавная елка города Перми.",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Мотовилихинское отделение", 
		description: "Мотовилихинское отделение\nпоздравляет всех с нашим днём!\nЖелаем, чтобы поляна всегда была накрыта,\nплан выполнен, и в карманах\nбыло полно зелени!\nМы делаем общее дело, вместе мы сила!",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Кудымкарское отделение", 
		description: "Наш фильм о развитии электроэнергетики.\nКакой будет для нас энергетика будущего,\nс ее инновациями и новыми технологиями?\nПредставить трудно!\nА давайте вернемся лет так на 55 назад,\nведь история праздника «День энергетика»\nначалась именно тогда.",
		id: "uEaouwm3ebA" 
	},
]

const time = "Голосование продлится с 12.00 до 16.00"

export default function Vote({likes, indexes}){
	
	const _indexes = indexes.map(item => item.index)

	const onLike = async (index) => {
		const resp = await REST ('/api/likes', {index}, _indexes.includes(index)?'DELETE': 'POST')
		if(!resp.error) mutate('/api')
	}

	return (
		<div className={styles.background} id="vote">
			<h2>Голосование за лучший видеоролик к дню энергетика (до 16.00)</h2>
			<ul className={cn(styles.votes, "container")}>
				{clips.map((item, index) => (
					<li key={index}>
						<Video title={item.title} className={videoStyles.small} time={time} id={item.id}/>
						<div className={styles.description}>{item.description}</div>
						{_indexes.includes(index)?(
							<button className={cn("button", styles.button)} onClick={() => onLike(index)}>
								{likes?likes[index].likes: 0}<img src="/images/liked.svg"/>Вы прогосовали
							</button>
						):(
							<button className={cn("button", styles.button)} onClick={() => onLike(index)}>
								{likes?likes[index].likes: 0}<img src="/images/like.svg"/>Проголосовать
							</button>
						)}
					</li>
				))}			
			</ul>
		</div>
	)
}