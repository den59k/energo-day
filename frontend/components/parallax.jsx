import { useContext, createContext, useEffect, useState, useRef } from 'react';
import cn from 'classnames'

const ParallaxContext = createContext(0);

export function useParallax (element){
	const value = useContext(ParallaxContext)

	if(element)
		return element.getBoundingClientRect(element).top+window.pageYOffset-value

	return value;
}

export function ParallaxProvider ({children}){
	const [ value, setValue ] = useState(0)

	useEffect(() => {
		let lastScroll = 0
		let stop = false

		const loopParallax = () => {
			if(Math.abs(window.pageYOffset-lastScroll) > 1){
				lastScroll = lastScroll+(window.pageYOffset-lastScroll)*0.5
				setValue(lastScroll)
			}
			if(!stop)
				requestAnimationFrame(loopParallax)
		}

		loopParallax();

		return () => stop = true
	}, [])

	return (
		<ParallaxContext.Provider value={value}>
			{children}
		</ParallaxContext.Provider>
	)
}

export function Parallax({src, k, style, className}){
	
	const ref = useRef()
	const parallax = useParallax(ref.current)*k

	return (
		<div className={cn("parallax", className)} ref={ref}>
			<div 
				style={{backgroundImage: `url(${src})`, 
				transform: `translateY(${parallax}px)`, ...style}}
			>
			</div>
		</div>
	)
}