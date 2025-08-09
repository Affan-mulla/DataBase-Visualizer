import { create } from "zustand";

export const useStore = create((set) => ({
    database: [
        {
            id: 1,
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
            ]
        }
    ],


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
}));
