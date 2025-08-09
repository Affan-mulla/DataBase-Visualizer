import { Background, Controls, Handle, Position, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react'
import React from 'react'
import '@xyflow/react/dist/style.css';
import { Key } from 'lucide-react';

const Display = () => {

  const nodeTypes = {
    custom: CustomNode,
  }

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialedges);


  return (
    <div className="h-screen w-full relative">
      <ReactFlow
        onNodesChange={onNodesChange}
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onEdgesChange={onEdgesChange}
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
      tableName: 'table_1',
      columns: [
        {
          id: 1,
          name: 'id',
          type: 'bigint',
          isPrimary: true,
          nullable: false
        },
        {
          id: 2,
          name: 'name',
          type: 'varchar',
          isPrimary: false,
          nullable: true,
        }
      ]
    },
    position: { x: 100, y: 300 },
  },
  {
    id: 'n2',
    type: 'custom',
    data: {
      tableName: 'table_2',
      columns: [
        {
          id: 1,
          name: 'id',
          type: 'bigint',
          isPrimary: true,
          nullable: false
        }
      ]
    },
    position: { x: 500, y: 300 },
  }
]

const initialedges = [
  {
    id: 'e1',
    source: 'n1',
    target: 'n2',
    animated: true
  }
]
function CustomNode({ data }) {
  return (
    <div className="w-[300px] bg-white shadow rounded-lg border-t-amber-400 border-t-4 flex flex-col overflow-hidden">
      {/* Table Name */}
      <h1 className="bg-neutral-200 text-2xl font-bold py-2 px-4 text-center">
        {data.tableName}
      </h1>

      {/* Table Rows */}
      <div className="flex flex-col divide-y divide-neutral-400">
        {data.columns.map((col, i) => (
          <div key={i} className="relative flex justify-between py-2 px-4 text-neutral-600">
            {/* Left handle */}
            <Handle
              type="target"
              position={Position.Left}
              id={`${data.tableName}-${col.name}-in`}
              style={{ top: '50%', transform: 'translateY(-50%)', background: '#555' }}
            />

            {/* Column name */}
            <p className="flex items-center gap-1 font-semibold">
              {col.isPrimary && <Key size={16} />}
              {col.name}
            </p>

            {/* Column type */}
            <p>{col.type}{col.nullable && '?'}</p>

            {/* Right handle */}
            <Handle
              type="source"
              position={Position.Right}
              id={`${data.tableName}-${col.name}-out`}
              style={{ top: '50%', transform: 'translateY(-50%)', background: '#555' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}