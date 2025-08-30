import { useEffect, useMemo, useState } from "react";
import { Key, Trash, ArrowDown, ArrowUp, Star, CircleDot, Snowflake, LogIn } from "lucide-react";
import { useStore } from "../store/store";
import { dbDataTypes } from "../data/dataTypes";
import GetColumns from "../hooks/GetColumns";

function Collapsible({ id, borderColor, name, diagramId }) {

  const [isOpen, setIsOpen] = useState(false);
  const [openKeyMenu, setOpenKeyMenu] = useState(null);
  const [nullable, setNullable] = useState(false);

  const columns = GetColumns(diagramId, id)  
  
  const deleteT = useStore((state) => state.deleteTable);
  const addC = useStore((state) => state.addColumn);
  const deleteC = useStore((state) => state.deleteColumn);
  const setKey = useStore((state) => state.setColoumnKey);
  const setNull = useStore((state) => state.setColumnNull);
  const changeCName = useStore((state) => state.changeColumnName);
  const changeCType = useStore((state) => state.changeColumnType);
  const changeTName = useStore((state) => state.changeTableName);

  const options = [
    { value: "none", label: "None", icon: CircleDot },
    { value: "primary", label: "Primary", icon: Key },
    { value: "unique", label: "Unique", icon: Snowflake }
  ];

  const toggleKeyMenu = (colId) => {
    setOpenKeyMenu(openKeyMenu === colId ? null : colId);
  };


  const addColumn = () => {
    addC(id, { id: Date.now(), name: "new_column", type: "bigint", isPrimary: false, nullable: false }, diagramId);
  };

  const setColoumnKey = (colId, key) => {
    setKey(id, colId, key,diagramId);
    toggleKeyMenu(null);
  }

  const removeSpace = (name) => {
    const newName = name.split("").map((e) => {
      if (e === " ") {
        return "_"
      } else return e
    }).join("")
    return newName;
  }

  return (
    <div
      className="w-full max-w-lg z-0 bg-white dark:bg-neutral-800 shadow-md border-l-4"
      style={{ borderLeftColor: `${borderColor}` }}
    >
      <div className="flex items-center justify-between py-1 px-3 border-b border-neutral-200 dark:border-neutral-700 gap-2">
        <div
          className="cursor-pointer text-neutral-500 dark:text-neutral-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        </div>
        <input
          className="font-semibold bg-transparent focus:outline-none text-neutral-800 dark:text-neutral-200 text-sm flex-1"
          defaultValue={name || "table_1"}
          placeholder="Table Name"
          onChange={(e) => changeTName(id, removeSpace(e.target.value),diagramId)}
        />
        <div className="cursor-pointer text-neutral-500 dark:text-neutral-400 hover:text-red-500 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded" onClick={()=> deleteT(id,diagramId)}>
          <Trash size={16} />
        </div>
      </div>
      {isOpen && (
        <>
          <div className="p-3 space-y-2">
            {columns && columns.map((col, i) => (
              <div
                key={i}
                className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-700 rounded-md px-2 py-1 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors h-10"
              >
                <input
                  className="w-1/3 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:outline-none border border-neutral-300 dark:border-neutral-600 rounded px-2 h-full text-sm focus:ring-1 focus:ring-emerald-400"
                  defaultValue={col.name}
                  onChange={(e) => changeCName(id, col.id, removeSpace(e.target.value),diagramId)}
                />
                <input
                  className="w-1/3 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:outline-none border border-neutral-300 dark:border-neutral-600 rounded px-2 h-full text-sm focus:ring-1 focus:ring-emerald-400"
                  defaultValue={col.type}
                  list="types"
                  onChange={(e) => changeCType(id, col.id, e.target.value, diagramId)}
                />
                <datalist id="types">
                {
                  dbDataTypes.map((type, i) => (
                    <option key={i} value={type}>{type}</option>
                  ))
                }
                </datalist>
                <div className="flex items-center h-full">
                  <div
                    className="relative h-full px-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer flex items-center justify-center"
                    onClick={() => toggleKeyMenu(col.id)}
                  >
                    <button className="flex items-center justify-center h-full">
                      {col.key === "primary"
                        ? <Key size={16} className="text-emerald-400" />
                        : col.key === "unique"
                          ? <Snowflake size={16} className="text-sky-400" />
                          : <CircleDot size={16} className="dark:text-neutral-300 text-neutral-500" />}
                    </button>

                    {openKeyMenu === col.id && (
                      <div className="absolute right-0 top-full w-40 bg-neutral-900 text-white shadow shadow-neutral-900 rounded p-2">
                        {options.map((option, index) => (
                          <button
                            key={index}
                            className="flex items-center justify-start gap-4 py-1 px-4 hover:bg-teal-500 w-full rounded font-semibold"
                            onClick={() => setColoumnKey(col.id, option.value,diagramId)}
                          >
                            <option.icon size={16} />
                            <span>{option.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <span
                    className={`hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer rounded px-2 h-full flex items-center justify-center font-semibold ${col.nullable ? "text-red-500" : "text-neutral-600 dark:text-neutral-300"}`}
                    onClick={() => {setNullable(!nullable); setNull(id, col.id, !col.nullable, diagramId)}}
                  >
                    N
                  </span>

                  <span
                    className="hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer rounded px-2 h-full hover:text-red-500 flex items-center justify-center dark:text-neutral-300 text-neutral-500"
                    onClick={() => deleteC(id, col.id, diagramId)}
                  >
                    <Trash size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex gap-2 p-3 border-t border-neutral-200 dark:border-neutral-700">
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