
import { FolderPlus } from 'lucide-react';
import Diagram from '../components/Diagram'
import { useStore } from '../store/store'
import { useState } from 'react';
import PopOver from '../components/PopOver';

const Home = () => {
  const [popover, setPopover] = useState(false);
  const diagrams = useStore((state) => state.database);

  return (
    <div className="p-6 flex justify-center items-center min-h-screen bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300">
      <div className="flex flex-col p-6 rounded-2xl shadow-lg border bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 max-w-5xl w-full transition-colors duration-300">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">My Diagrams</h2>
          <button
            onClick={() => setPopover(true)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 
                       flex items-center gap-2 rounded font-medium text-white 
                       shadow-sm transition-all duration-200"
          >
            <FolderPlus size={20} />
            <span>Create Diagram</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-0.5 mt-6 min-h-[200px] max-h-[550px] overflow-y-auto py-4 px-2">
          {diagrams.length > 0 ? (
            diagrams.map((item, i) => (
              <Diagram
                key={i}
                id={item.id}
                diagramName={item.diagram_name}
              />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center gap-4 col-span-full">
              <img src="/no-diagram.svg" alt="No Diagram" className="w-1/2 max-w-[250px]" />
              <p className="text-neutral-700 dark:text-neutral-300 text-lg font-semibold text-center">
                No Diagram Found
              </p>
            </div>
          )}
        </div>
        {popover && <PopOver setPopover={setPopover} />}
      </div>
    </div>
  );
};


export default Home
