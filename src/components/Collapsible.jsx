import { useEffect, useState } from "react";
import { Key, Trash, ArrowDown, ArrowUp, Star, CircleDot, Snowflake } from "lucide-react";
import { useStore } from "../store/store";

function Collapsible({ id, borderColor, name }) {

  const [isOpen, setIsOpen] = useState(true);
  const [openKeyMenu, setOpenKeyMenu] = useState(null);

  const columns = useStore((state) => state.database.find((table) => table.id === id).columns);
  const deleteT = useStore((state) => state.deleteTable);
  const addC = useStore((state) => state.addColumn);
  const deleteC = useStore((state) => state.deleteColumn);
  const setKey = useStore((state) => state.setColoumnKey);
  const setNull = useStore((state) => state.setColumnNull);


  

  const options = [
    { value: "none", label: "None", icon: CircleDot },
    { value: "primary", label: "Primary", icon: Key },
    { value: "unique", label: "Unique", icon: Snowflake }
  ];

  const toggleKeyMenu = (colId) => {
    setOpenKeyMenu(openKeyMenu === colId ? null : colId);
  };


  const addColumn = () => {
    addC(id, { id: crypto.randomUUID(), name: "new_column", type: "bigint", isPrimary: false, nullable: false });
  };

  const deleteColumn = (colId) => {
    deleteC(id, colId);
  };

  const deleteTable = () => {
    deleteT(id);
  }

  const setColoumnKey = (colId, key) => {
    setKey(id, colId, key);
    toggleKeyMenu(null);
  }

  const setColumnNull = (colId, nullable) => {
    setNull(id, colId, nullable);
  }

  return (
    <div
      className="w-full max-w-lg z-0 bg-white shadow-md border-l-4"
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

                <div className="flex items-center h-full">
                  <div className="relative h-full px-2 rounded hover:bg-gray-200 cursor-pointer flex items-center justify-center" onClick={() =>{
                    toggleKeyMenu(col.id)
                  }}>
                    <button className="flex items-center justify-center h-full" >
                      {
                        col.key === "primary" 
                        ? <Key size={16} className="text-emerald-400" /> 
                        : col.key === "unique" 
                        ? <Snowflake size={16} className="text-sky-400" /> 
                        : <CircleDot size={16} />
                        
                      }
                    </button>

                    {openKeyMenu === col.id && (
                      <div className="absolute right-0 top-full  w-40 bg-neutral-800 text-white shadow shadow-neutral-900  rounded p-2 ">
                        {
                          options.map((option, index) => (
                            <button className="flex items-center justify-start gap-4 py-1 px-4 hover:bg-teal-500 w-full rounded font-semibold" onClick={() => setColoumnKey(col.id, option.value)}>

                              <option.icon size={16} />
                              <span>{option.label}</span>
                            </button>
                          ))
                        }

                      </div>
                    )}
                  </div>





                  <span className={`text-gray-600 hover:bg-gray-200 cursor-pointer rounded px-2 h-full flex items-center justify-center font-semibold ${col.nullable ? "text-red-500" : "text-gray-600"} `} onClick={() => setColumnNull(col.id, !col.nullable)}>
                    N
                  </span>

                  <span
                    className="text-gray-600 hover:bg-gray-200 cursor-pointer rounded px-2 h-full hover:text-red-500 flex items-center justify-center"
                    onClick={() => deleteColumn(col.id)}
                  >
                    <Trash size={16} />
                  </span>
                </div>
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