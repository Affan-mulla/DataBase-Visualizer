import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(persist((set) => ({
    database: [
        {
            id: crypto.randomUUID(),
            name: "table_1",
            borderColor: "#FF6B6B",
            columns: [
                {
                    id: 1,
                    name: "id",
                    type: "bigint",
                    key: "primary",
                    nullable: false
                }
            ],
            type: "custom",
            position: { x: 400 + Math.floor(Math.random() * 300), y: 200 + Math.floor(Math.random() * 300) },
        }
    ],
    edges: [],
    setEdges: (edges) => set({ edges }),

    addEdges: (edge) => set((state) => ({
        edges: [...state.edges, edge]
    })),

    deleteEdge : (edgeId) => set((state) => ({
        edges: state.edges.filter((e) => e.id !== edgeId)
    })),

    updateNodePosition: (node) => set((state) => ({
        database: state.database.map((table) =>
            table.id == node.id ? { ...table, position: node.position } : table
        )
    })),

    changeTableName: (tableId, name) => set((state) => ({
        database: state.database.map((table) =>
            table.id === tableId ? { ...table, name: name || `table_${state.database.length}` } : table
        )
    })),

    changeColumnName: (tableId, colId, name) => set((state) => ({
        database: state.database.map((table) =>
            table.id === tableId
                ? {
                    ...table,
                    columns: table.columns.map((col) =>
                        col.id === colId ? { ...col, name: name } : col
                    )
                }
                : table
        )
    })),

    changeColumnType: (tableId, colId, type) => set((state) => ({
        database: state.database.map((table) =>
            table.id === tableId
                ? {
                    ...table,
                    columns: table.columns.map((col) =>
                        col.id === colId ? { ...col, type: type } : col
                    )
                }
                : table
        )
    })),


    setColoumnKey: (tableId, colId, key) =>
        set((state) => ({
            database: state.database.map((table) =>
                table.id === tableId
                    ? {
                        ...table,
                        columns: table.columns.map((col) =>
                            col.id === colId ? { ...col, key: key } : col
                        )
                    } :
                    table

            )
        })),

    setColumnNull: (tableId, colId, nullable) =>
        set((state) => ({
            database: state.database.map((table) =>
                table.id === tableId
                    ? {
                        ...table,
                        columns: table.columns.map((col) =>
                            col.id === colId ? { ...col, nullable: nullable } : col
                        )
                    }
                    : table
            )
        })),

    addTable: (table) =>
        set((state) => ({
            database: [...state.database, table]
        })),

    deleteTable: (id) =>
        set((state) => ({
            database: state.database.filter((table) => table.id !== id)
        })),

    addColumn: (tableId, column) =>
        set((state) => ({
            database: state.database.map((table) =>
                table.id === tableId
                    ? { ...table, columns: [...table.columns, column] }
                    : table
            )
        })),

    deleteColumn: (tableId, colId) =>
        set((state) => ({
            database: state.database.map((table) =>
                table.id === tableId
                    ? {
                        ...table,
                        columns: table.columns.filter((col) => col.id !== colId)
                    }
                    : table
            )
        }))
})));
