import React, { memo } from 'react'
import { useStore } from '../store/store'

const GetDiagram = (diagramId) => {
  
  const database = useStore((state) => state.database)

  return database.find((diagram) => diagram.id == diagramId)
}

export default GetDiagram