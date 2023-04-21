import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import UserGlobalStyles from '@/config/theme/user-global-styles'
import createEmotionCache from '@/config/theme/create-emotion-cache'
import theme from '@/config/theme/light'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>IT&apos;s Tinkoff Solution Cup</title>
				<meta name={'description'} content={'Generated by create next app'} />
				<meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
				<link rel={'icon'} href={'/favicon.ico'} />
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<UserGlobalStyles theme={theme} />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	)
}
