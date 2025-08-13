import Sidebar from './components/Sidebar'
import Display from './components/Display'

const App = () => {
  return (
    <div className='flex h-screen relative'>
      <div className='absolute z-10 h-full bg-white'>
      <Sidebar />
      </div>
      <Display  />
    </div>
  )
}

export default App