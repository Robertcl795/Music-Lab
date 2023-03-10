import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import Head from 'next/head'
import Header from '../components/header'
import Sidebar from '../components/sidebar';

export default function App({ Component, pageProps }: AppProps) {
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <>
      <Head>
        <title>Spotify - Reproductor web</title>
        <meta name="description" content="Generated by Music Lab" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/800px-Spotify_logo_without_text.svg.png"
        />
      </Head>
      <div className="bg-spotify-gray min-h-screen text-gray-300">
        <Header setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}
