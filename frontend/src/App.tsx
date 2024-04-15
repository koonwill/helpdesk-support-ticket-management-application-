import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Promotions from './pages/Promotions';
import Data from './pages/Data';
import Logout from './pages/Logout';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/order" element={<Order />}/>
          <Route path="/promotions" element={<Promotions />}/>
          <Route path="/data" element={<Data />}/>
          <Route path="/logout" element={<Logout />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App