
import { FolderPlus } from 'lucide-react';
import Diagram from '../components/Diagram'
import { useStore } from '../store/store'

const Home = () => {

  const diagrams = useStore((state) => state.database);
  const addDiagram = useStore((state) => state.createDiagram)
  
  return (
    <div className='p-4 flex justify-center items-center min-h-screen bg-neutral-900'>
      <div className='flex flex-col p-4 bg-neutral-800 rounded-xl max-w-4xl w-full shadow border border-neutral-700'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-bold text-white'>My Diagrams</h2>
          <button className='px-4 py-2 cursor-pointer bg-blue-500 flex rounded gap-2 text-white' onClick={addDiagram}>
            <FolderPlus/>
            <p>Create Diagram</p>
          </button>
        </div>
        <div className='flex gap-4 flex-wrap justify-start'>
          {
            diagrams.length > 0 ? diagrams.map((item,i) => (
              <Diagram key={i} id={item.id} diagramName={item.diagram_name}/>
            )) : <p className='text-white text-2xl text-center w-full'>No Data </p> 
          }
        </div>
      </div>
    </div>
  )
}

export default Home
