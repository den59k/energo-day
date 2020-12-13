import Link from 'next/link'

import styles from './styles/head.module.sass'

const links = [
	{ title: "Праздничные поздравления", href: "/#congrulations" },
	{ title: "Награждение лучших сотрудников", href: "/#congrulations" },
	{ title: "Наши победители", href: "/#congrulations" },
	{ title: "Голосование за видеоролики", href: "/#congrulations" },
	{ title: "Розыгрыш супер-приза", href: "/#congrulations", className: styles.big },
	{ title: "Игротека", href: "/#congrulations" },
	{ title: "Видеопоздравления", href: "/#congrulations" },
	{ title: "Поздравить в чате", href: "/#congrulations" },
	{ title: "Праздничное фото", href: "/#congrulations" },
]

export default function HeadBlock(){

	

	return (
		<header className={styles.container}>
			<div className="container h">
				<div className={styles.top}>
					<img src={"/images/logo.png"} alt="Логотип пермэнергосбыт" className={styles.logo}/>
					<div className={styles.titleBlock}>
						<h1>Поздравляем с днем энергетика</h1>
						<div className={styles.sub}>Объединяем на расстоянии!</div>
					</div>
				</div>

				<img src={"/images/preview-top.jpg"} alt="Превью видео" style={{display: "block", margin: "0 auto", alignSelf: "center"}}/>
				<div className={styles.buttons}>
					{links.map((item, index) => (
						<Link href={item.href} key={index}>
							<a className={item.className}>{item.title}</a>
						</Link>
					))}
				</div>
			</div>
		</header>
	)
}