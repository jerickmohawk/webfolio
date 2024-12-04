'use client'
import {useState} from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const currentPath = usePathname()
  const [hover, setHover] = useState(false)
  const links = [
    { path: "/", text: "home"},
    { path: "/services", text: "services"},
    { path: "/resume", text: "resume"},
    { path: "/portfolio", text: "portfolio"},
    { path: "/contact", text: "contact"}
];
  return (
    <nav className='flex gap-8'>
     {
      links.map((link, index) =>{
        return(
          <Link className={`${currentPath === link.path && 'text-accent border-b-2 border-accent' }
                              capitalize font-medium hover:text-accent transition-colors duration-300 font-primary
                            `} 
              key={index} href={link.path}
              onMouseEnter={()=>setHover(true)}
              onMouseLeave={()=>setHover(false)}
              >{link.text}
              
          </Link>
        )
      })
     }
    </nav>
  )
}

export default NavBar