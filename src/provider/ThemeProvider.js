'use client'

import {createContext, useState, useEffect} from 'react'

export const ThemeContext = createContext()

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () =>{
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
    }

  return (
    <ThemeContext.Provider value={{toggleTheme, theme}}>
        <body className={`${theme} transition-all duration-200 `}>{children}</body>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider