import { addEdge, Background, Controls, ReactFlow, reconnectEdge, useEdgesState, useNodesState } from '@xyflow/react'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import '@xyflow/react/dist/style.css';
import CustomNode from './CustomNode';
import { useStore } from '../store/store.jsx';
import CustomEdge from './CustomEdge.jsx';
import GetDiagram from '../hooks/GetDiagram.js';

const Display = ({diagramId}) => {

  const database = GetDiagram(diagramId)
  const updateNodePosition = useStore((state) => state.updateNodePosition);
  const edgeReconnectSuccessful = useRef(true);
  const addEdges = useStore((state) => state.addEdges);
  const storeEdges = database.edges
  const updateEdges = useStore((state) => state.updateEdges);


  const onReconnectStart = useCallback(() => {  
    edgeReconnectSuccessful.current = false;
  }, []);

  const onReconnect = useCallback((oldEdge, newConnection) => {
    edgeReconnectSuccessful.current = true;
    setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
    updateEdges(reconnectEdge(oldEdge, newConnection, storeEdges), diagramId);
  }, []);

  const onReconnectEnd = useCallback((_, edge) => {
    
    if (!edgeReconnectSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeReconnectSuccessful.current = true;
  }, []);



  const initialNodes = useMemo(() =>
    database.diagram_data.map((table) => ({
      id: table.id,
      type: 'custom',
      data: {
        id : table.id,
        tableName: table.name,
        borderColor: table.borderColor,
        columns: table.columns
      },
      position: table.position

    }))
    , [database]);

  const initialedges = useMemo(() => storeEdges, [storeEdges]);
  const nodeTypes = {
    custom: CustomNode,
  }

  const edgeTypes = {
    custom: CustomEdge
  }

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialedges);

  const onConnect = useCallback((nodeParams) => {
    const newEdge = addEdge({ ...nodeParams, type: 'custom' }, edges)
    
    addEdges(newEdge[newEdge.length - 1], diagramId)
    setEdges((eds) => {
      return addEdge({ ...nodeParams, type: 'custom' }, eds)
    })
  }
    , []);



  useEffect(() => {
    setNodes((prevNodes) => {
      const updatedNodes = [];

      for (const table of database.diagram_data) {
        const existingNode = prevNodes.find((node) => node.id === table.id);

        const newData = {
          id : table.id,
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
            position: table.position
          });
        }
      }


      return updatedNodes;
    });
  }, [database]);

  const NodesUpdate = (e) => {
    if (e[0].dragging === false) {
      updateNodePosition(e[0],diagramId);
    }
    onNodesChange(e)
  }

  return (
    <div className="h-screen w-full relative dark:bg-neutral-800">
      <ReactFlow
        onNodesChange={NodesUpdate}
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        edgeTypes={edgeTypes}
        snapToGrid
        onReconnect={onReconnect}
        onReconnectStart={onReconnectStart}
        onReconnectEnd={onReconnectEnd}
      // colorMode={colorMode}
      connectionRadius={40}
      

      >
        <Background />
        <Controls position='bottom-right' />
        {/* <MiniMap /> */}
      </ReactFlow>
    </div>
  )
}

export default Display
