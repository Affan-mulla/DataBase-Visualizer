
import { Trash2 } from 'lucide-react'
import React from 'react'
import { useStore } from '../store/store'
import { Link } from 'react-router-dom';

const Diagram = ({id,diagramName}) => {
  
  const del = useStore((state) => state.deleteDiagram)

  return (
    <div className='max-w-[300px] mt-4'>
      <div className='flex flex-col bg-neutral-700 rounded-xl overflow-hidden border border-neutral-600 shadow transition hover:scale-[1.02]'>
        <Link to={`/diagram/${id}`}>
        <img src="/Dp.jpg" alt="" className='h-40 w-full object-cover'/>
        </Link>
        <div className='flex justify-between items-center p-3'>
          <h1 className='text-lg font-semibold text-white'>{diagramName}</h1>
          <button className='p-2 hover:bg-neutral-600 rounded-md' onClick={()=> del(id)}>
            <Trash2 size={18} className='text-red-500' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Diagram
