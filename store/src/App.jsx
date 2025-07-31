import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import User from './components/User'
import Orders from './components/Orders'
import Cart from './components/Cart'
import Shop from './components/Shop'
import './styles/index.css'  // mantendo o CSS importado aqui

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/user" element={<User />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
