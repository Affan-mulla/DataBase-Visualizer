import { Handle, Position } from "@xyflow/react";
import { Key, Snowflake } from "lucide-react";

function CustomNode({ data }) {
    
    return (
        <div className="w-[300px] bg-white shadow rounded-lg border-t-4 flex flex-col overflow-hidden"
            style={{ borderTopColor: `${data.borderColor}` }}>
            
            <h1 className="bg-neutral-200 text-2xl font-bold py-2 px-4 text-center">
                {data.tableName}
            </h1>

           
            <div className="flex flex-col divide-y divide-neutral-400">
                {data.columns.map((col, i) => (
                    <div key={i} className="relative flex justify-between py-2 px-4 text-neutral-600">
                        
                        <Handle
                            type="target"
                            position={Position.Left}
                            id={`${data.tableName}-${col.name}-in`}
                            
                            style={{ top: '50%',height: '25%', width: '10px', transform: 'translateY(-50%)', background: '#555' }}
                        />

                        <p className="flex items-center gap-1 font-semibold">
                            {
                                col.key === 'primary' ? (
                                    <Key size={16} />
                                )
                                    :
                                    col.key === 'unique' ? (
                                        <Snowflake size={16} />
                                    )
                                        :
                                        null
                            }
                            {col.name}
                        </p>

                    
                        <p>{col.type}{col.nullable && '?'}</p>

                        
                        <Handle
                            type="source"
                            position={Position.Right}
                            id={`${data.tableName}-${col.name}-out`}
                            style={{ top: '50%',height: '25%', width: '10px', transform: 'translateY(-50%)', background: '#555' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomNode