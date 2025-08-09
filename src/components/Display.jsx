import { Background, Controls, ReactFlow } from '@xyflow/react'
import React from 'react'
import '@xyflow/react/dist/style.css';

const Display = () => {

  const nodeTypes = {
    custom: CustomNode,
  }

  return (
    <div className="h-screen w-full relative">
      <ReactFlow
        panOnScroll
        nodes={initialNodes}
        nodeTypes={nodeTypes}
      >
        <Background />

        <Controls position='bottom-right' />

      </ReactFlow>
    </div>
  )
}

export default Display

const initialNodes = [
  {
    id: 'n1',
    type: 'custom',
    data: {
      label: 'Node 1',
      name: 'Node 1'
    },
    position: { x: 500, y: 300 },
  }
]

function CustomNode() {
  return (
    <div className='w-[300px] h-auto bg-white shadow rounded-lg border-t-amber-400 flex flex-col overflow-hidden'>
      <h1 className=' bg-neutral-300 text-2xl font-bold py-2 px-4 text-center w-full'>Table_1</h1>
      <div className='flex flex-col last:border-b-0  [&:not(:last-child)]:border-b]'> 
        <div className='flex justify-between py-2 px-4  '>
          <p>Column 1</p>
          <p>type</p>
        </div>
        <div className='flex justify-between py-2 px-4 '>
          <p>Column 1</p>
          <p>type</p>
        </div>
        <div className='flex justify-between py-2 px-4 '>
          <p>Column 1</p>
          <p>type</p>
        </div>

      </div>
    </div>
  )
}