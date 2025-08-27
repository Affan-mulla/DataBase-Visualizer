import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(persist((set) => ({
    database: [
        {
            id: Date.now(),
            diagram_name: "Diagram_1",
            diagram_data: [{
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
            }],
            edges: []
        }
    ],

    createDiagram: (diagramName) => set((state) => ({
        database: [...state.database, {

            id: Date.now(),
            diagram_name: diagramName || "Diagram_"+state.database.length,
            diagram_data: [{
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
            }],
            edges: []

        }]
    })),

    deleteDiagram: (DiagramId) => set((state) => ({
        database: state.database.filter((database) => DiagramId != database.id)
    })),

    setEdges: (edges, diagramId) => set((state) => ({
        database: state.database.map((diagram) =>
            diagram.id === diagramId ? {
                ...diagram,
                edges: edges
            } : diagram
        )
    })),

    addEdges: (edge, diagramId) => set((state) => ({
        database: state.database.map((diagram) =>
            diagram.id === diagramId ? {
                ...diagram,
                edges: [...diagram.edges, edge]
            } : diagram
        )
    })),

    updateEdges: (newEdges, diagramId) => set((state) => ({
        database: state.database.map((diagram) =>
            diagram.id === diagramId ? {
                ...diagram,
                edges: newEdges
            } : diagram
        )
    })),

    updateNodePosition: (node, diagramId) => set((state) => ({
        database: state.database.map((diagram) =>
            diagram.id === diagramId
                ? {
                    ...diagram,
                    diagram_data: diagram.diagram_data.map((table) =>
                        table.id === node.id ? { ...table, position: node.position } : table
                    )
                }
                : diagram
        )
    })),

    changeTableName: (tableId, name, diagramId) => set((state) => ({
        database: state.database.map((diagram) =>
            diagram.id === diagramId
                ? {
                    ...diagram,
                    diagram_data: diagram.diagram_data.map((table) =>
                        table.id === tableId ? { ...table, name: name } : table
                    )
                }
                : diagram
        )
    })),

    changeColumnName: (tableId, colId, name, diagramId) => set((state) => ({
        database: state.database.map((diagram) =>
            diagram.id === diagramId
                ? {
                    ...diagram,
                    diagram_data: diagram.diagram_data.map((table) =>
                        table.id === tableId
                            ? {
                                ...table,
                                columns: table.columns.map((col) =>
                                    col.id === colId ? { ...col, name: name } : col
                                )
                            }
                            : table
                    )
                }
                : diagram
        )
    })),

    changeColumnType: (tableId, colId, type, diagramId) => set((state) => ({
        database: state.database.map((diagram) =>
            diagram.id === diagramId ?
                {
                    ...diagram,
                    diagram_data: diagram.diagram_data.map((table) =>
                        table.id === tableId
                            ? {
                                ...table,
                                columns: table.columns.map((col) =>
                                    col.id === colId ? { ...col, type: type } : col
                                )
                            }
                            : table
                    )
                }
                : diagram
        )
    })),


    setColoumnKey: (tableId, colId, key, diagramId) =>
        set((state) => ({
            database: state.database.map((diagram) =>
                diagram.id === diagramId ?
                    {
                        ...diagram,
                        diagram_data: diagram.diagram_data.map((table) =>
                            table.id === tableId
                                ? {
                                    ...table,
                                    columns: table.columns.map((col) =>
                                        col.id === colId ? { ...col, key: key } : col
                                    )
                                }
                                : table
                        )
                    }
                    : diagram
            )
        })),

    setColumnNull: (tableId, colId, nullable, diagramId) =>
        set((state) => ({
            database: state.database.map((diagram) =>
                diagram.id === diagramId ?
                    {
                        ...diagram,
                        diagram_data: diagram.diagram_data.map((table) =>
                            table.id === tableId
                                ? {
                                    ...table,
                                    columns: table.columns.map((col) =>
                                        col.id === colId ? { ...col, nullable: nullable } : col
                                    )
                                }
                                : table
                        )
                    }
                    : diagram
            )
        })),

    addTable: (table, diagramId) =>
        set((state) => ({
            database: state.database.map((diagram) =>
                diagram.id === diagramId ?
                    {
                        ...diagram,
                        diagram_data: [...diagram.diagram_data, table]
                    }
                    : diagram
            )
        })),

    deleteTable: (id, diagramId) =>
        set((state) => ({
            database: state.database.map((diagram) =>
                diagram.id === diagramId ?
                    {
                        ...diagram,
                        diagram_data: diagram.diagram_data.filter((table) => table.id !== id)
                    }
                    : diagram
            )
        })),

    addColumn: (tableId, column, diagramId) =>
        set((state) => ({
            database: state.database.map((diagram) =>
                diagram.id === diagramId ?
                    {
                        ...diagram,
                        diagram_data: diagram.diagram_data.map((table) =>
                            table.id === tableId ? { ...table, columns: [...table.columns, column] } : table
                        )
                    }
                    : diagram
            )
        })),

    deleteColumn: (tableId, colId, diagramId) =>
        set((state) => ({
            database: state.database.map((diagram) =>
                diagram.id === diagramId ?
                    {
                        ...diagram,
                        diagram_data: diagram.diagram_data.map((table) =>
                            table.id === tableId ? { ...table, columns: table.columns.filter((col) => col.id !== colId) } : table
                        )
                    }
                    : diagram
            )
        }))
})));
