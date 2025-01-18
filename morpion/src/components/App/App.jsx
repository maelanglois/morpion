import './App.css'

import { Route, Routes } from 'react-router'

import Footer from '../../pages/Footer'
import Menu from '../../pages/Menu'
import Botgame from '../../pages/Botgame'
import User from '../../pages/Login'
import Home from '../../pages/Home'
import Ranking from '../../pages/Ranking'
import Game from '../../pages/Game'
import Player from '../../pages/Loginbot'
import Threegame from '../../pages/Three'

function App() {

  return (
    <>
      <Menu />
        <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/game" element={<Game />} />
              <Route path="/botgame" element={<Botgame />} />
              <Route path="/login" element={<User />} />
              <Route path='/loginbot' element={<Player />} />
              <Route path='/three-game' element={<Threegame />} />
          </Routes>
        </main>
      <Footer />
    </>
  )
}

export default App
