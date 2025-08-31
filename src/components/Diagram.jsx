
import { Trash2 } from 'lucide-react'
import React from 'react'
import { useStore } from '../store/store'
import { Link } from 'react-router-dom';

const Diagram = ({ id, diagramName }) => {

  const del = useStore((state) => state.deleteDiagram)

  return (
    <div className=" mt-4 w-full">
      <div
        className="flex flex-col rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-md hover:shadow-lg dark:hover:shadow-neutral-950 hover:shadow-neutral-300 transition-all duration-300 "
      >
        <Link to={`/diagram/${id}`}>
          <img
            src="/Dp.jpg"
            alt="Diagram preview"
            className="h-40 w-full object-cover"
          />
        </Link>

        <div className="flex justify-between items-center px-4 py-3">
          <h1 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 truncate">
            {diagramName}
          </h1>
          <button
            onClick={() => del(id)}
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
          >
            <Trash2 size={18} className="text-red-500" />
          </button>
        </div>
      </div>
    </div>

  )
}

export default Diagram
