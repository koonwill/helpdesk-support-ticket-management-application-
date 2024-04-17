import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tickets from './pages/Tickets';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/tickets" element={<Tickets />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App