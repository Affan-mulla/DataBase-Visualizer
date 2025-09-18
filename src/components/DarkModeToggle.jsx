import { Moon, Sun } from 'lucide-react';
import React, { useEffect } from 'react'

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(localStorage.getItem('isDarkMode') === 'true');
    useEffect(() => {

        localStorage.setItem('isDarkMode', isDarkMode);
        if(isDarkMode){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[isDarkMode])
    const toggleDarkMode = () => {
        const body = document.querySelector('html');
        body.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
    }
  return (
    
        <button onClick={toggleDarkMode} className='p-2 cursor-pointer '>
            {
                isDarkMode ? (
                   <Sun className='w-6 h-6 text-amber-400' />
                ) : (
                   
                    <Moon className='w-6 h-6 text-indigo-500' />
                )
            }
        </button>

  )
}

export default DarkModeToggle