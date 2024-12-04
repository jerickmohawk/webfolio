'use client'
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
  import Link from "next/link";
  import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { FaCode } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";


const links = [
  { path: "/", text: "home"},
  { path: "/services", text: "services"},
  { path: "/resume", text: "resume"},
  { path: "/portfolio", text: "portfolio"},
  { path: "/contact", text: "contact"}
];



const MobileNav = () => {
  const currentPath = usePathname()
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className={`bg-white text-black dark:bg-black dark:text-white  w-3/4`}>
        <div className="absolute top-8 left-8">
          <ThemeToggle />
        </div>
        <div className="mt-24 mb-20 text-center">
          <Link href={'/'}>
              <h3 className='h3 flex justify-center items-center'>
                  J<span><FaCode className='text-accent rotate-90' /></span>rick
              </h3>
          </Link>
        </div>
        <nav className="flex flex-col gap-8 justify-center items-center font-primary">
          {links.map((item, index) =>{
            return(
              <Link className={`${item.path === currentPath && 'text-accent border-b-2 border-accent'}  text-xl capitalize hover:text-accent active:text-accent transition-all`} href={item.path} key={index}>
                {item.text}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav