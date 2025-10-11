import  { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useStore } from '../store/store'
import { Editor } from '@monaco-editor/react'
import { ArrowLeft, Copy } from 'lucide-react'
import { AnimatePresence, motion } from "framer-motion"
const Schema = () => {
    const id = useParams().id
    const database = useStore((state) => state.database)
    const diagram = database.find((diagram) => diagram.id == id).diagram_data

    const [schema, setSchema] = useState(generatePostgresSchema(diagram));
    const [copied, setCopied] = useState(false);


    function generatePostgresSchema(diagram) {
        return diagram.map(table => {
            const cols = table.columns.map(col => {
                let def = `${col.name} ${col.type}`;
                if (col.key) def += col.key === "primary" ? " PRIMARY KEY" : " UNIQUE";
                if (!col.nullable) def += " NOT NULL";
                return def;
            });
            const fks = table.foreignKeys.map(fk => {
                return `\n  FOREIGN KEY (${fk.foreignCol}) REFERENCES ${fk.refTable}(${fk.refCol})`;
            });
            return `CREATE TABLE ${table.name} (\n  ${cols.join(",\n  ")} ${fks.join("")}\n);`;
        }).join("\n\n");
    }

    console.log(schema);

    const copy = () => {
        navigator.clipboard.writeText(schema);
        setCopied(true);
    }

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => {
                setCopied(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    })

    return (
        <div className="flex-1 h-screen max-h-screen overflow-hidden">
            <div className='flex items-center justify-between px-4 py-2 border-b border-b-neutral-700 border-neutral-800  sticky top-0 bg-neutral-900 z-50'>
                <Link to={`/diagram/${id}`} className=' p-2 hover:bg-neutral-800 rounded-md transition duration-200 cursor-pointer'><ArrowLeft className='text-white' size={20} /></Link>

                <button className='p-2   rounded-md transition duration-200 text-white cursor-pointer bg-blue-600 hover:bg-blue-500' onClick={copy}><Copy size={18} /></button>
            </div>
            <div className="h-full">
                <Editor
                    
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
            <AnimatePresence>
                    {copied && (
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="fixed right-6 bottom-4 bg-green-400 rounded-md shadow-lg"
                        >
                            <p className="text-sm text-neutral-900 p-2 font-medium">
                                Copied to clipboard!
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
        </div>

    )
}

export default Schema