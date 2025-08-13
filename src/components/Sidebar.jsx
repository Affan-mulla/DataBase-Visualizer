import React, { use, useState } from 'react'
import Collapsible from './Collapsible'
import { useStore } from '../store/store';


const Sidebar = () => {
    
    const tables = useStore((state) => state.database);
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
                    id: 1,
                    name: "id",
                    type: "bigint",
                    isPrimary: true,
                    nullable: false
                }
            ],
            type : 'custom',
            position : {x: 300 + Math.floor(Math.random() * 900) , y : Math.floor(Math.random() * 500)}
        })
       
    };


    return (
        <div className='w-[350px] shadow-xl h-full max-h-screen overflow-y-auto scroll-smooth '>
            <div className='flex justify-between p-4 items-center border-b border-neutral-200 shadow'>
                <h1 className='text-2xl text-neutral-700 font-semibold'>Tables</h1>
                <button onClick={addNewTable} className='bg-blue-500 text-white px-4 py-[7px] font-semibold rounded hover:bg-blue-600'>+ New table</button>
            </div>
            <div>
                {
                    tables.map(table => (
                        <Collapsible
                            id={table.id}
                            key={table.id} 
                            name={table.name}
                            borderColor={table.borderColor}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar