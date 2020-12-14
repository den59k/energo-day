import cn from 'classnames'

import styles from './styles/vote.module.sass'
import videoStyles from 'components/video.module.sass'

import Video from 'components/video'

const clips = [
	{ 
		title: "Северное отделение", 
		description: "Северное отделение представляет вашему вниманию короткометражный фильм «Оплати долги и живи спокойно».",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Губахинское отделение", 
		description: "Мы представляем Вашему вниманию видеоролик об увлечениях сотрудников Губахинского отделения",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Закамское отделение", 
		description: "Ролик называется «Где денег взять?». Для достижения цели все способы хороши и наша дружная команда Закамского отделения готова на все. ",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Отдел Интеллектуальных систем учета", 
		description: "Отдел Интеллектуальных систем учета  - это небольшое, но очень интеллектуальное подразделение ПАО «Пермэнергосбыт». Как Прометей несет свет и тепло, а также приборы учета в каждый дом… не бесплатно конечно. Наш  фильм – это небольшая иллюстрация вышесказанного.",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Бухгалтерия", 
		description: "Наша Бухгалтерия – это: команда красивых, активных, успешных девушек,  золотое звено в крепкой цепи финансово-экономических процессов Компании. Что ни говори, а Бухгалтерия – это уникальные шестеренки, с помощью которых «Пермэнергосбыт» работает как Кремлевские Куранты!!! С боем и вовремя!",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Кунгурское отделение", 
		description: "«Пермэнергосбыт» представляет! В 2020 году они трудились как пчелы! Словно мед собирали оплату с населения своего города в общую копилку компании. Обеспечивали светом и  теплом свой город! И сейчас они заслужили возможность отлично повеселиться и поздравить всю компанию с праздником. Встречайте: Самые трудолюбивые и самые энергичные пчелы Кунгура в новом блокбастере «Энерготоки»!",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Южное отделение", 
		description: "Наш ролик посвящен шуточной ситуации, сложившейся в День Энергетика. Данным видеороликом мы хотели передать важность праздничного настроения в большом коллективе! ",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Очерское отделение", 
		description: "Наш видеоролик о буднях Очерского Отделения: утро начинается с замера температуры, обед - за ЗОЖ, все оперативки с разговорами о выполнении планов и прибыли, а мечты работников о крупной премии по итогам. ",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Чусовское отделение", 
		description: "Надеемся вы нас поймёте,\nСмотря наш фильм с улыбкой на лице,\nЧто свет вы каждый день не просто продаёте,\nА светит он у каждого в душе!!!",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Управление оптового рынка", 
		description: "В видеоролике представлена часть  рабочего процесса (в шутливой форме) и отражено, что сотрудники любят свою профессию и гордятся работой в нашей Компании.",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Центральное отделение", 
		description: "С днем Энергетика и Новым годом поздравляет коллектив Центрального отделения ПАО «Пермэнергосбыт», благодаря работе которого, жителей радует Главная елка города Перми.",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Мотовилихинское отделение", 
		description: "Мотовилихинское отделение поздравляет всех с нашим днём! Желаем, чтобы поляна всегда была накрыта, план выполнен, и в карманах было полно зелени! Мы делаем общее дело, вместе мы сила!",
		id: "uEaouwm3ebA" 
	},
	{ 
		title: "Кудымкарское отделение", 
		description: "Наш фильм о развитии электроэнергетики.  Что же ожидает нас и какой будет  для нас энергетика будущего, с ее инновациями и новыми технологиями ? Представить трудно! А давайте вернемся лет так на 55 назад, ведь история праздника «День энергетика» началась именно тогда.",
		id: "uEaouwm3ebA" 
	},
]

const time = "Голосование продлится с 12.00 до 16.00"

export default function Vote(){
	
	return (
		<div className={styles.background}>
			<h2>Голосование за лучший видеоролик к дню энергетика (до 16.00)</h2>
			<ul className={cn(styles.votes, "container")}>
				{clips.map((item, index) => (
					<li key={index}>
						<Video title={item.title} className={videoStyles.small} time={time} id={item.id}/>
						<div className={styles.description}>{item.description}</div>
						<button className="button"><img src="/images/like.svg"/>Проголосовать</button>
					</li>
				))}			
			</ul>
		</div>
	)
}