import Link from 'next/link'
import { FaCode } from "react-icons/fa6";
import NavBar from './NavBar';
import ThemeToggle from './ThemeToggle';
import MobileNav from './MobileNav';


const Header = () => {
  return (
    <header className='h-32 flex'>
        <div className='container mx-auto flex justify-between items-center'>
            {/* logo */}
            <Link href={'/'}>
                <h3 className='flex flex-row items-center font-bold h3'>
                    J<span><FaCode className='text-accent rotate-90' /></span>rick
                </h3>
            </Link>

            {/* desktop navigation */}
            <div className='hidden lg:flex gap-8'>
                <NavBar />
                <ThemeToggle />
            </div>

            {/* mobile navigation */}

            <div className='lg:hidden flex'>
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header