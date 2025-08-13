import { BaseEdge, EdgeLabelRenderer, getBezierPath, getSmoothStepPath, getStraightPath, useReactFlow } from '@xyflow/react'
import React from 'react'

const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
    const [deleteOpen, setDeleteOpen] = React.useState(false);

    const { deleteElements } = useReactFlow();
    const [edgePath] = getSmoothStepPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition: 'right',
        targetPosition: 'left',
        
    });

    return (
        <>
            <BaseEdge path={edgePath} id={id} />
            <EdgeLabelRenderer

            >

                <div
                    onMouseEnter={() => setDeleteOpen(true)
                    }
                    onMouseLeave={() => setDeleteOpen(false)
                    }
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%)`,
                        pointerEvents: 'all',
                        left: (sourceX + targetX) / 2,
                        top: (sourceY + targetY) / 2,
                        fontSize: '10px',
                        zIndex: 1
                    }}
                >
                    {deleteOpen &&
                        <button
                            onClick={() => {
                                deleteElements({ edges: [id] });
                            }}
                            className='bg-white px-2 py-1 rounded border border-gray-300 hover:bg-gray-50'
                        >
                            Delete
                        </button>
                    }

                </div>

            </EdgeLabelRenderer>
        </>
    )
}

export default CustomEdge