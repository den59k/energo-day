import Head from 'next/head'
import { ParallaxProvider } from 'components/parallax'


export default function Layout ({children}){

	return (
		<ParallaxProvider>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"/>
			</Head>
			{children}
		</ParallaxProvider>
	)
}
