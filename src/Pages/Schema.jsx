import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../store/store'

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
                //   if (col.foreignKey) def += ` REFERENCES ${col.foreignKey}`;
                return def;
            });
            return `CREATE TABLE ${table.name} (\n  ${cols.join(",\n  ")}\n);`;
        }).join("\n\n");
    }

    
    return (
        <div>
            <pre>
            <code>{schema}</code>
            </pre>
        </div>
    )
}

export default Schema