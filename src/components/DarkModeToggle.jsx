import { Moon, Sun } from 'lucide-react';
import React from 'react'

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const toggleDarkMode = () => {
        const body = document.querySelector('html');
        body.classList.toggle('dark', isDarkMode);
        setIsDarkMode(!isDarkMode);
    }
  return (
    
        <button onClick={toggleDarkMode} className='p-2 cursor-pointer '>
            {
                isDarkMode ? (
                    <Moon className='w-6 h-6 text-indigo-500' />
                ) : (
                    <Sun className='w-6 h-6 text-amber-400' />
                )
            }
        </button>

  )
}

export default DarkModeToggle