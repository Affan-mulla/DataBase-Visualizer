import Collapsible from './Collapsible'
import { useStore } from '../store/store';
import { useParams } from 'react-router-dom';
import { Plus, PlusCircle } from 'lucide-react';


const Sidebar = ({diagramId}) => {
    const tables = useStore((state) => state.database.find((diagram) => diagram.id == diagramId).diagram_data);
    const addTable = useStore((state) => state.addTable);
   

    const addNewTable = () => {
        
        const colors = [
            "#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF",
            "#FF6FD8", "#6A67CE", "#F65A83", "#00C49A",
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        addTable({
            id: crypto.randomUUID(),
            name: `table_${tables.length + 1}`,
            borderColor: randomColor,
            columns: [
                {
                    id: Date.now(),
                    name: "id",
                    type: "BIGINT",
                    key : "primary",
                    nullable: false
                }
            ],
            foreignKeys : [],
            type: 'custom',
            position: { x: 300 + Math.floor(Math.random() * 900), y: Math.floor(Math.random() * 500) }
        }, diagramId);

    };



    return (

        <div className="w-[350px] h-screen max-h-screen flex flex-col shadow-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
            <div className="flex justify-between items-center p-4 border-b dark:border-neutral-800 shadow dark:shadow-neutral-700 sticky top-0 bg-white  dark:bg-neutral-800 z-50">
                <h1 className="text-2xl font-semibold text-neutral-700 dark:text-white">Tables</h1>
                <button
                    onClick={addNewTable}
                    className="bg-blue-600 hover:bg-blue-500 text-white cursor-pointer  hover:scale-95 transition  flex items-center font-semibold px-4 py-[7px] rounded shadow duration-300"
                >
                    <PlusCircle className=" mr-2 font-bold" size={20}  />
                    New table
                </button>
            </div>

            <div className="flex-1 overflow-y-auto">
                {tables.map((table) => (
                    <Collapsible
                        id={table.id}
                        key={table.id}
                        name={table.name}
                        borderColor={table.borderColor}
                        diagramId={diagramId}
                    />
                ))}
            </div>
        </div>

    )
}

export default Sidebar