'use client'

import { useContext } from 'react'
import { ThemeContext } from '@/provider/ThemeProvider'
import { FiSun, FiMoon } from "react-icons/fi";


function ThemeToggle() {
    const {toggleTheme, theme} = useContext(ThemeContext)
  return (
    <>
        <div onClick={toggleTheme} className={` cursor-pointer flex w-20 h-8 rounded-3xl border items-center ${theme === 'dark' ? 'bg-white' : 'bg-lightBg' }`}>
          <p className={`font-primary text-[10px] uppercase font-semibold ${theme === 'dark' ? 'translate-x-9 text-black' : 'translate-x-2'} absolute`}>{theme === 'dark' ? 'light' : 'dark' }</p>
          <div className={`h-6 w-6 rounded-full transition-transform duration-500 flex items-center justify-center hover:rotate-180 ${theme === 'dark' ? 'translate-x-1 bg-black' : 'translate-x-12 bg-white'}`}>
          {
            theme === 'dark' ? 

            <FiSun />
            :
            <FiMoon />
          }

          </div>
        </div>
    </>
  )
}

export default ThemeToggle