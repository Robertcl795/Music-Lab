import Link from 'next/link'
import React from 'react'
import {
  RiMore2Fill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from 'react-icons/ri'

type HeaderProps = { setShowSidebar: (val: boolean) => void }
const Header = ({ setShowSidebar }: HeaderProps) => (
  <header className="fixed left-0 top-0 md:ml-64 w-full md:w-[calc(100%-256px)] bg-[#0a0a0a]/90 flex items-center justify-between p-4 z-40">
    <div>
      <RiMore2Fill
        onClick={() => setShowSidebar(true)}
        className="text-2xl hover:cursor-pointer p-2 box-content md:hidden"
      />
	  <div className='hidden md:flex items-center gap-2 text-2xl'>
		<RiArrowLeftSLine className='p-2 box-content hover:cursor-pointer bg-spotify-gray rounded-full' />
		<RiArrowRightSLine className='p-2 box-content hover:cursor-pointer bg-spotify-gray rounded-full' />
	  </div>
    </div>
	<div className="flex items-center gap-6">
		<Link href="/" className='hover:text-white transition-colors'>Regístrate!</Link>
		<Link
          href="/"
          className="py-2 md:py-3 px-4 rounded-full bg-white text-spotify-gray font-medium hover:scale-105 transition-transform"
        >Iniciar Sesión</Link>
	</div>
  </header>
)

export default Header
