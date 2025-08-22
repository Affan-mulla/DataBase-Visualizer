
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import DiagramWrapper from './Pages/DiagramWrapper';
import Schema from './Pages/Schema';

const App = () => {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diagram/:id" element={<DiagramWrapper />} />
      <Route path="/schema/:id" element={<Schema />} />
    </Routes>
    </>
  )
}

export default App