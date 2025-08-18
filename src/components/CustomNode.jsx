import { Handle, Position } from "@xyflow/react";
import { Key, Snowflake } from "lucide-react";

function CustomNode({ data }) {
  
  return (
    <div
      className="w-[300px] bg-white  dark:bg-neutral-900 shadow rounded-lg border-t-4 flex flex-col overflow-hidden"
      style={{ borderTopColor: `${data.borderColor}` }}
    >
      {/* Table Name */}
      <h1 className="bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-200 text-2xl font-bold py-2 px-4 text-center">
        {data.tableName}
      </h1>

      {/* Columns */}
      <div className="flex flex-col divide-y divide-neutral-300 dark:divide-neutral-600">
        {data.columns.map((col, i) => (
          <div
            key={i}
            className="relative flex justify-between py-2 px-4 text-neutral-700 dark:text-neutral-300"
          >
            {/* Incoming Handle */}
            <Handle
              type="target"
              position={Position.Left}
              id={`in-${data.id}-${col.id}`}
              style={{
                top: "50%",
                height: "25%",
                width: "10px",
                transform: "translateY(-50%)",
                background: "#555",
              }}
            />

            {/* Column Name */}
            <p className="flex items-center gap-1 font-semibold">
              {col.key === "primary" ? (
                <Key size={16} className="text-emerald-400" />
              ) : col.key === "unique" ? (
                <Snowflake size={16} className="text-sky-400" />
              ) : null}
              {col.name}
            </p>

            {/* Column Type */}
            <p className="text-neutral-500 dark:text-neutral-400">
              {col.type}
              {col.nullable && "?"}
            </p>

            {/* Outgoing Handle */}
            <Handle
              type="source"
              position={Position.Right}
               id={`out-${data.id}-${col.id}`}
              style={{
                top: "50%",
                height: "25%",
                width: "10px",
                transform: "translateY(-50%)",
                background: "#555",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomNode;
