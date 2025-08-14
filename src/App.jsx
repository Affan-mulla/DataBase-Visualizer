import Sidebar from './components/Sidebar'
import Display from './components/Display'
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

   const hideSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

  return (
    <div className='flex h-screen relative' >
      <div className={`absolute z-10 h-full transition duration-300 bg-white ${sidebarOpen ? 'translate-x-0' : 'translate-x-[-350px]'}`}>
      <Sidebar />
       <div className='absolute top-3 -right-10 z-50 bg-blue-300/40 rounded-r-md flex flex-col' >
                <button className='h-full w-full p-2 cursor-pointer' onClick={hideSidebar}>
                    {
                        sidebarOpen ? (
                            <ChevronLeft className='w-6 h-6 text-indigo-500' />
                        ) : (
                            <ChevronRight className='w-6 h-6 text-indigo-500' />
                        )
                    }
                </button>
                <DarkModeToggle />
            </div>
      </div>
      <Display  />
    </div>
  )
}

export default App