import cn from 'classnames'
import { useParallax } from 'components/parallax'
import onClick from 'libs/smooth-href'

import styles from 'styles/common.module.sass'

export default function UpButton (){
	
	const value = useParallax()

	
	return (
		<a href="/#head" className={cn(styles.upButton, value < 100 && styles.hide)} onClick={onClick}>
			<svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M25.6631 11.4396L15.0124 0.788945C14.1816 -0.0375586 12.8397 -0.0375586 12.0089 0.788945L1.3582 11.4396C0.674463 12.2362 0.674463 13.4142 1.3582 14.2109C2.12294 15.1034 3.46915 15.2078 4.36172 14.443L13.5 5.30485L22.6595 14.4431C23.4903 15.2696 24.8323 15.2696 25.6631 14.4431C26.4896 13.6123 26.4896 12.2703 25.6631 11.4396Z" fill="#BDBDBD"/>
			</svg>
		</a>
	)
}