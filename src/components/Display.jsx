import { addEdge, Background, Controls, MiniMap, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react'
import { useCallback, useEffect, useMemo } from 'react'
import '@xyflow/react/dist/style.css';
import CustomNode from './CustomNode';
import { useStore } from '../store/store.jsx';
import CustomEdge from './CustomEdge.jsx';

const Display = () => {

  const database = useStore((state) => state.database);
  const updateNodePosition = useStore((state) => state.updateNodePosition);

  const initialNodes = useMemo(() =>
    database.map((table) => ({
      id: table.id,
      type: 'custom',
      data: {
        tableName: table.name,
        borderColor: table.borderColor,
        columns: table.columns
      },
      position: table.position

    }))
    , [database]);

  const initialedges = []
  const nodeTypes = {
    custom: CustomNode,
  }

  const edgeTypes = {
    custom: CustomEdge
  }

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialedges);

  const onConnect = useCallback((nodeParams) =>
    setEdges((eds) => addEdge(nodeParams, eds))
    , []);

  useEffect(() => {
    setNodes((prevNodes) => {
      const updatedNodes = [];

      for (const table of database) {
        const existingNode = prevNodes.find((node) => node.id === table.id);

        const newData = {
          tableName: table.name,
          borderColor: table.borderColor,
          columns: table.columns,
        };

        if (
          existingNode &&
          JSON.stringify(existingNode.data) === JSON.stringify(newData)
        ) {
          updatedNodes.push(existingNode);
        } else {
          updatedNodes.push({
            id: table.id,
            type: 'custom',
            data: newData,
            position : table.position
          });
        }
      }


      return updatedNodes;
    });
  }, [database]);

  const NodesUpdate = (e) => {
    if(e[0].dragging === false) {
      updateNodePosition(e[0]);
    }
    onNodesChange(e)
  } 

  return (
    <div className="h-screen w-full relative">
      <ReactFlow
        onNodesChange={NodesUpdate}
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        edgeTypes={edgeTypes}

      >
        <Background />
        <Controls position='bottom-right' />
        {/* <MiniMap /> */}
      </ReactFlow>
    </div>
  )
}

export default Display
