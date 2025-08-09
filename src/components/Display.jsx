import { addEdge, Background, Controls, MiniMap, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react'
import { useCallback, useEffect } from 'react'
import '@xyflow/react/dist/style.css';
import CustomNode from './CustomNode';
import { useStore } from '../store/store.jsx';

const Display = () => {

  const database = useStore((state) => state.database);

  const initialNodes = database.map((table) => (
    {
      id: table.id,
      type: 'custom',
      data: {
        tableName: table.name,
        columns: table.columns,
        borderColor: table.borderColor
      },
      position: { x: 300, y: 300 },

    }
  ))
  const initialedges = []

  const nodeTypes = {
    custom: CustomNode,
  }

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialedges);

  const onConnect = useCallback((nodeParams) =>
    setEdges((eds) => addEdge(nodeParams, eds))
    , []);


    useEffect(()=> {
      setNodes(initialNodes)
    },[database])

  return (
    <div className="h-screen w-full relative">
      <ReactFlow
        onNodesChange={onNodesChange}
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        
      >
        <Background />
        <Controls position='bottom-right' />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}

export default Display
