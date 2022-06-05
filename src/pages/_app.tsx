import NavBar from 'components/NavBar'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from '../styles/theme'
import Background from 'components/Background'
import 'tailwindcss/tailwind.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <Background />
        <div className={`relative pt-20`} style={{ zIndex: 2 }}>
          <NavBar />
          <Component {...pageProps} />
        </div>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App
