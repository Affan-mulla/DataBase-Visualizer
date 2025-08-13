import { BaseEdge, EdgeLabelRenderer } from '@xyflow/react'
import React from 'react'

const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
    const { deleteElements } = useReactFlow();
    const [edgePath] = getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    return (
        <>
            <BaseEdge path={edgePath} id={id} type='smoothstep'>
                <EdgeLabelRenderer>
                    <button onClick={() => deleteElements({ edges: [{ id }] })}>Delete</button>
                </EdgeLabelRenderer>
            </BaseEdge>
        </>
    )
}

export default CustomEdge