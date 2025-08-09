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
                    isPrimary: true,
                    nullable: false
                }
            ]
        }
    ],

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
