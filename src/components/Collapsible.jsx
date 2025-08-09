import { useState } from "react";
import { Key, Trash, ArrowDown, ArrowUp } from "lucide-react";
import { useStore } from "../store/store";

function Collapsible({ id, borderColor, name }) {
  const columns = useStore((state) => state.database.find((table) => table.id === id).columns);
  const deleteT = useStore((state) => state.deleteTable);
  const [isOpen, setIsOpen] = useState(true);
  const addC = useStore((state) => state.addColumn);
  const deleteC = useStore((state) => state.deleteColumn);

  const addColumn = () => {
    addC(id, { id: crypto.randomUUID(), name: "new_column", type: "bigint", isPrimary: false, nullable: false });
  };

  const deleteColumn = (colId) => {
    deleteC(id, colId);
  };

  const deleteTable = () => {
    deleteT(id);
  }

  return (
    <div
      className="w-full max-w-lg bg-white shadow-md overflow-hidden border-l-4"
      style={{ borderLeftColor: `${borderColor}` }}
    >
      {/* Header */}
      <div className="flex items-center justify-between py-1 px-3 bg-gray-50 border-b border-gray-200 gap-2">
        <div
          className="cursor-pointer text-gray-500 hover:text-indigo-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        </div>
        <input
          className="font-semibold bg-transparent focus:outline-none text-gray-800 text-sm flex-1"
          defaultValue={name || "table_1"}
        />
        <div className="cursor-pointer text-gray-500 hover:text-red-600 transition-colors hover:bg-neutral-200 p-2 rounded" onClick={deleteTable}>
          <Trash
            size={16}
          />
        </div>
      </div>

      {/* Columns */}
      {isOpen && (
        <>
          <div className="p-3 space-y-2">
            {columns && columns.map((col, i) => (
              <div
                key={i}
                className="flex items-center gap-2 border border-gray-200 rounded-md px-2 py-1 bg-gray-50 hover:bg-gray-100 transition-colors h-10"
              >
                <input
                  className="w-1/3 bg-white focus:outline-none border border-gray-300 rounded px-2 h-full text-sm focus:ring-1 focus:ring-emerald-400"
                  defaultValue={col.name}
                />
                <input
                  className="w-1/3 bg-white focus:outline-none border border-gray-300 rounded px-2 h-full text-sm focus:ring-1 focus:ring-emerald-400"
                  defaultValue={col.type}
                  list="types"
                />
                <datalist id="types">
                  <option value="int" />
                  <option value="bigint" />
                  <option value="text" />
                  <option value="date" />
                  <option value="boolean" />
                  <option value="float" />
                  <option value="double" />
                  <option value="varchar" />
                </datalist>


                <span className="text-green-600 h-full px-1 rounded hover:bg-gray-200 cursor-pointer flex items-center justify-center">
                  <Key size={16} />
                </span>



                <span className="text-gray-600 hover:bg-gray-200 cursor-pointer rounded px-1 h-full flex items-center justify-center font-semibold">
                  N
                </span>


                <span
                  className="text-gray-600 hover:bg-gray-200 cursor-pointer rounded px-1 h-full hover:text-red-500 flex items-center justify-center"
                  onClick={() => deleteColumn(col.id)}
                >
                  <Trash size={16} />
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex gap-2 p-3 border-t border-gray-200">
            <button
              onClick={addColumn}
              className="px-3 py-2 bg-emerald-600 text-white rounded text-sm hover:bg-emerald-700 transition-colors"
            >
              Add Column
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Collapsible