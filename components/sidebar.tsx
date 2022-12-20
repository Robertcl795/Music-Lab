import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  RiHome4Fill,
  RiSearchLine,
  RiFoldersLine,
  RiAddBoxLine,
  RiHeartFill,
  RiCloseLine,
} from 'react-icons/ri'

type SidebarProps = {
  showSidebar: boolean
  setShowSidebar: (val: boolean) => void
}

const sidebarItemClass = "flex items-center gap-4 hover:text-gray-100 transition-colors"
const sidebarLinks = [
  {
    children: "Inicio",
    href: "/",
    icon: <RiHome4Fill/>,
    itemClass: ""
  },
  {
    children: "Buscar",
    href: "/",
    icon: <RiSearchLine/>,
    itemClass: ""
  },
  {
    children: "Tu Biblioteca",
    href: "/",
    icon: <RiFoldersLine/>,
    itemClass: "mb-8"
  },
  {
    children: "Crear playlist",
    href: "/",
    icon: <RiAddBoxLine/>,
    itemClass: ""
  },
  {
    children: "Tus me gusta",
    href: "/",
    icon: <RiHeartFill/>,
    itemClass: ""
  },
]
const Sidebar = ({ showSidebar, setShowSidebar }: SidebarProps) => (
  <div
      className={`bg-black fixed top-0 w-64 h-full p-6 flex flex-col justify-between ${
        showSidebar ? "left-0" : "-left-full"
      } md:left-0 transition-all duration-300 z-50`}
    >
      <div className="md:hidden absolute right-4 top-4 ">
        <button
          className="text-2xl p-2 box-content"
          onClick={() => setShowSidebar(false)}
        >
          <RiCloseLine />
        </button>
      </div>
      <div>
        <div className="mb-8">
          <Image
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            width={130}
            height={130}
            alt="Spotify"
          />
        </div>
        <nav>
          <ul className="flex flex-col gap-y-4">
            {sidebarLinks.map(link => <li key={link.href} className={link.itemClass}>
              <Link href={link.href} className={sidebarItemClass}>
                {link.icon}{link.children}
              </Link>
            </li>)}
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className="flex flex-col gap-y-2">
            <li>
              <Link href="#" className="text-xs hover:underline">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="#" className="text-xs hover:underline">
                Privacidad
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
)

export default Sidebar
