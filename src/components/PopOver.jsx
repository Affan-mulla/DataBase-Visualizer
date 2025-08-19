import React, { useState } from 'react'
import { useStore } from '../store/store';
import { X } from 'lucide-react';

const PopOver = ({ setPopover }) => {
    const addDiagram = useStore((state) => state.createDiagram)
    const [diagramName, setDiagramName] = useState('');
    return (
        <div className='text-white absolute h-screen top-0 left-0 w-full flex justify-center items-center bg-black/50'>
            <div className='bg-neutral-900 w-1/2 h-fit min-w-[400px] border border-neutral-700 rounded-2xl p-4'>
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='text-lg font-semibold text-neutral-200'>Create Your Diagram</h1>
                    <button className='p-2 hover:bg-neutral-600 rounded-md transition duration-200 cursor-pointer' onClick={() => setPopover(false)}><X size={18} /></button>
                </div>
                <div>
                    <label className='text-sm font-semibold text-neutral-200'>Diagram Name</label>
                    <input type="text" placeholder='Diagram Name' className='w-full px-4 py-2 rounded-md border border-neutral-700 bg-neutral-800 text-white' onChange={(e) => setDiagramName(e.target.value)} />
                </div>
                <button className='mt-4 px-4 py-2 cursor-pointer bg-blue-500 flex rounded gap-2 text-white' onClick={() => {
                    addDiagram(diagramName);
                    setPopover(false);
                }}>Create</button>
            </div>
        </div>
    )
}

export default PopOver