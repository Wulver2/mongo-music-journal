import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router"
import { Login } from './pages/login'
import { Register } from './pages/register'
import { Home } from './pages/home'
import { Navbar } from './components/navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
