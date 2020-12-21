import cn from 'classnames'
import { REST } from 'libs/fetch'
import { mutate } from 'swr'

import styles from './styles/vote.module.sass'
import videoStyles from 'components/video.module.sass'

import Video from 'components/video'

const clips = [
	{ 
		title: "Северное отделение", 
		_description: "Северное отделение представляет вашему\nвниманию короткометражный фильм\n«Оплати долги и живи спокойно».",
		id: "XQezMHNspfU",
		url: "https://pesk2020.permenergosbyt.ru/01severnoe.mp4",
		//url: "http://172.16.1.39/01-severnoe.mp4"
	},
	{ 
		title: "Губахинское отделение", 
		_description: "Мы представляем Вашему вниманию\nвидеоролик об увлечениях сотрудников\nГубахинского отделения",
		id: "SLegmfJ6vvg",
		url: "https://pesk2020.permenergosbyt.ru/02gubahinskoe.mp4",
		//url: "http://172.16.1.39/02-gubahinskoe.mp4"
	},
	{ 
		title: "Закамское отделение", 
		_description: "Ролик называется «Где денег взять?».\nДля достижения цели все способы хороши\nи наша дружная команда\nЗакамского отделения готова на все. ",
		id: "a5pB9xV8Rx8",
		url: "https://pesk2020.permenergosbyt.ru/03zakamskoe.mp4",
		//url: "http://172.16.1.39/03-zakamskoe.mp4"
	},
	{ 
		title: "Отдел Интеллектуальных систем учета", 
		_description: "Отдел Интеллектуальных систем учета -\nэто небольшое, но очень интеллектуальное\nподразделение ПАО «Пермэнергосбыт».\nКак Прометей несет свет и тепло, а также\nприборы учета в каждый дом.\nНаш  фильм – это небольшая иллюстрация вышесказанного.",
		id: "Mepx7dTaCGE",
		url: "https://pesk2020.permenergosbyt.ru/04intellect.mp4",
		//url: "http://172.16.1.39/04-intellect.mp4"
	},
	{ 
		title: "Бухгалтерия", 
		_description: "Наша Бухгалтерия – это: команда красивых,\nактивных, успешных девушек, золотое звено\nв крепкой цепи финансово-экономических\nпроцессов Компании. Что ни говори, а\nБухгалтерия – это уникальные шестеренки,\nс помощью которых «Пермэнергосбыт»\nработает как Кремлевские Куранты!!!\nС боем и вовремя!",
		id: "edvgII6OrUo",
		url: "https://pesk2020.permenergosbyt.ru/05buhgalteria.mp4",
		//url: "http://172.16.1.39/05-buhgalteria.mp4" 
	},
	{ 
		title: "Кунгурское отделение", 
		_description: "«Пермэнергосбыт» представляет!\nВ 2020 году они трудились как пчелы!\nСловно мед собирали оплату с населения\nв общую копилку компании.\nОбеспечивали светом и теплом свой город!\nИ сейчас они заслужили возможность\nпоздравить всех с праздником.\nВстречайте: Самые трудолюбивые и\nэнергичные пчелы Кунгура,\nв новом блокбастере «Энерготоки»!",
		id: "ugZhHVN-bm4",
		url: "https://pesk2020.permenergosbyt.ru/06kungurskoe.mp4",
		//url: "http://172.16.1.39/06-kungurskoe.mp4" 
	},
	{ 
		title: "Южное отделение", 
		_description: "Наш ролик посвящен шуточной ситуации,\nсложившейся в День Энергетика.\nДанным видеороликом мы хотели передать\nважность праздничного настроения\nв большом коллективе!",
		id: "TydB1FStuZg",
		url: "https://pesk2020.permenergosbyt.ru/07yuzhnoe.mp4",
		//url: "http://172.16.1.39/07-yuzhnoe.mp4" 
	},
	{ 
		title: "Очерское отделение", 
		_description: "Наш видеоролик о буднях\nОчерского Отделения:\nутро начинается с замера температуры,\nобед - за ЗОЖ, все оперативки\nо выполнении планов и прибыли,\nа мечты работников о крупной премии.",
		id: "Ezn9t4BdOxw",
		url: "https://pesk2020.permenergosbyt.ru/08ocherskoe.mp4",
		//url: "http://172.16.1.39/08-ocherskoe.mp4" 
	},
	{ 
		title: "Чусовское отделение", 
		_description: "Надеемся вы нас поймёте,\nСмотря наш фильм с улыбкой на лице,\nЧто свет вы каждый день не просто продаёте,\nА светит он у каждого в душе!!!",
		id: "6tIhyyIR2ew",
		url: "https://pesk2020.permenergosbyt.ru/09chusovskoe.mp4",
		//url: "http://172.16.1.39/09-chusovskoe.mp4" 
	},
	{ 
		title: "Управление оптового рынка", 
		_description: "В видеоролике представлена часть\nрабочего процесса (в шутливой форме) и\nотражено, что сотрудники любят\nсвою профессию и гордятся работой\nв нашей Компании.",
		id: "i7sFtJpTn4M",
		url: "https://pesk2020.permenergosbyt.ru/10optovogorinka.mp4",
		//url: "http://172.16.1.39/10-optovogo-rinka.mp4" 
	},
	{ 
		title: "Центральное отделение", 
		_description: "С днем Энергетика и Новым годом\nпоздравляет коллектив\nЦентрального отделения\nПАО «Пермэнергосбыт»,\nблагодаря работе которого, жителей радует\nГлавная елка города Перми.",
		id: "tj1YiuBUjgU",
		url: "https://pesk2020.permenergosbyt.ru/11centralnoe.mp4",
		//url: "http://172.16.1.39/11-centralnoe.mp4" 
	},
	{ 
		title: "Мотовилихинское отделение", 
		_description: "Мотовилихинское отделение\nпоздравляет всех с нашим днём!\nЖелаем, чтобы поляна всегда была накрыта,\nплан выполнен, и в карманах\nбыло полно зелени!\nМы делаем общее дело, вместе мы сила!",
		id: "EacPXGi30Fo",
		url: "https://pesk2020.permenergosbyt.ru/12motovilihinskoe.mp4",
		//url: "http://172.16.1.39/12-motovilihinskoe.mp4" 
	},
	{ 
		title: "Кудымкарское отделение", 
		type: 'wistia',
		_description: "Наш фильм о развитии электроэнергетики.\nКакой будет для нас энергетика будущего,\nс ее инновациями и новыми технологиями?\nПредставить трудно!\nА давайте вернемся лет так на 55 назад,\nведь история праздника «День энергетика»\nначалась именно тогда.",
		id: "xroldczgu9",
		url: "https://pesk2020.permenergosbyt.ru/13kudimkarskoe.mp4",
		//url: "http://172.16.1.39/13-kudimkarskoe.mp4"
		//id: 'URCrIe66Dt8'
	},
]

const time = "Голосование продлится с 12.00 до 16.00"

export default function Vote({likes, indexes}){

	const onLike = async (index) => {
		const resp = await REST ('/api/likes', {index}, indexes.find(item => item.index===index)?'DELETE': 'POST')
		if(!resp.error) mutate('/api')
	}

	return (
		<div className={styles.background} id="vote">
			<h2>Голосование за лучший видеоролик к дню энергетика (до 16.00)</h2>
			<ul className={cn(styles.votes, "container")}>
				{clips.map((item, index) => (
					<li key={index}>
						<Video {...item} className={videoStyles.small} time={time} />
						<div className={styles.description}>{item._description}</div>
						{indexes.find(item => item.index===index)?(
							<button className={cn("button", styles.button)} onClick={() => onLike(index)}>
								{likes?likes[index].likes: 0}<img src="/images/liked.svg"/>Вы проголосовали
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