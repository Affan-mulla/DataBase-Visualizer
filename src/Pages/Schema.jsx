import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../store/store'
import { Editor } from '@monaco-editor/react'

const Schema = () => {
    const id = useParams().id
    const database = useStore((state) => state.database)
    const diagram = database.find((diagram) => diagram.id == id).diagram_data
    console.log(diagram);

    const [schema, setSchema] = useState(generatePostgresSchema(diagram));



    function generatePostgresSchema(diagram) {
        return diagram.map(table => {
            const cols = table.columns.map(col => {
                let def = `${col.name} ${col.type}`;
                if (col.key) def += col.key === "primary" ? " PRIMARY KEY" : " UNIQUE";
                console.log(table.foreignKeys);
                if (col.nullable) def += " NOT NULL";
                return def;
            });
            const fks = table.foreignKeys.map(fk => {
                return `\n  FOREIGN KEY (${fk.foreignCol}) REFERENCES ${fk.refTable}(${fk.refCol})`;
            });
            return `CREATE TABLE ${table.name} (\n  ${cols.join(",\n  ")} ${fks.join("")}\n);`;
        }).join("\n\n");
    }

// `\n  FOREIGN KEY (${col.name}) REFERENCES ${fk.refTable}(${fk.refCol})`
    return (
        <div className="h-screen  overflow-hidden">
            <Editor
                height="100%"
                defaultLanguage="sql"
                value={schema}
                theme="vs-dark"
                options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    wordWrap: "on"
                }}
            />
        </div>
    )
}

export default Schema