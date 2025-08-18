import React from 'react'
import { useStore } from '../store/store'
import { memo } from 'react'

const GetColumns = (diagramId,tableId) => {
  const database = useStore((state) => state.database)
  const diagram = database.find((diagram) => diagram.id == diagramId).diagram_data
  return diagram.find((table) => table.id == tableId).columns
}

export default GetColumns