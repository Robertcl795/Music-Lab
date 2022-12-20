import Head from 'next/head'
import { Inter } from '@next/font/google'
import PlaylistGroup from '../components/playlist-group'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="pt-28 md:pl-72 p-8">
      <PlaylistGroup title="Spotify Playlists" />
      <PlaylistGroup title="Dormir" />
      <PlaylistGroup title="Enfoque" />
      <PlaylistGroup title="Estado de ánimo" />
    </div>
  )
}
