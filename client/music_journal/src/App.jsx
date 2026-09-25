import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router"
import { Login } from './pages/login'
import { Register } from './pages/register'
import { Home } from './pages/home'
import { Navbar } from './components/navbar'
import { Settings } from './pages/settings'
import { Song } from './pages/allSongs'
import { UserContextProvider } from '../context/userContext'
import { Favorites } from "./pages/favorites"
import { Albums } from "./pages/listAlbums"
import { Artists } from "./pages/listArtists"

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <div className='bg-neutral-900 h-screen text-white'>
        <UserContextProvider>
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/songs' element={<Song />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/albums' element={<Albums/>}/>
              <Route path='/artists' element={<Artists/>}/>
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      </div>
    </>
  )
}

export default App
