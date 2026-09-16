import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router"
import { Login } from './pages/login'
import { Register } from './pages/register'
import { Home } from './pages/home'
import { Navbar } from './components/navbar'
import { Settings } from './pages/settings'
import { Song } from './pages/allSongs'
import { UserContextProvider } from '../context/userContext'

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <div className='bg-neutral-900 h-screen'>
        <UserContextProvider>
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/songs' element={<Song />} />
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      </div>
    </>
  )
}

export default App
