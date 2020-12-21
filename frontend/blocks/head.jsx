import Link from 'next/link'
import Video from 'components/video'
import onClick from 'libs/smooth-href'
import styles from './styles/head.module.sass'

const links = [
	{ title: "Праздничные поздравления", href: "/#video-1" },
	{ title: "Награждение лучших сотрудников", href: "/#video-2" },
	{ title: "Наши победители", href: "/#video-4" },
	{ title: "Голосование за видеоролики", href: "/#vote" },
	{ title: "Розыгрыш супер-приза", href: "/#video-3", className: styles.big },
	{ title: "Игротека", href: "/#games" },
	{ title: "Видеопоздравления", href: "/#greetings" },
	{ title: "Поздравить в чате", href: "/#chat" },
	{ title: "Праздничное фото", href: "/#make-photo" },
]




export default function HeadBlock({timing}){

	const videoInfo = { 
		time: "Праздничная трансляция начнется в "+timing.time,
		id: "HOz34_2Z-mw" ,
		active: timing.active
	}

	return (
		<header className={styles.container} id="head">
			<div className="container h">
				<div className={styles.top}>
					<img src={"/images/logo.png"} alt="Логотип пермэнергосбыт" className={styles.logo}/>
					<div className={styles.titleBlock}>
						<h1>Поздравляем с днем энергетика</h1>
						<div className={styles.sub}>Объединяем на расстоянии!</div>
					</div>
				</div>

				<Video {...videoInfo} className={styles.video}/>
				<div className={styles.buttons}>
					{links.map((item, index) => (
						<Link href={item.href} key={index}>
							<a className={item.className} onClick={onClick}>{item.title}</a>
						</Link>
					))}
				</div>
			</div>
		</header>
	)
}