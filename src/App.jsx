
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import DiagramWrapper from './Pages/DiagramWrapper';

const App = () => {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diagram/:id" element={<DiagramWrapper />} />
    </Routes>
    </>
  )
}

export default App