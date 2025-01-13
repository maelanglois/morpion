import './App.css'
import Footer from '../../pages/Footer'
import Menu from '../../pages/Menu'

import { Route, Routes } from 'react-router'

import Home from '../../pages/Home'
import Ranking from '../../pages/Ranking'
import Game from '../../pages/Game'

function App() {

  return (
    <>
      <Menu />
        <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/game" element={<Game />} />
          </Routes>
        </main>
      <Footer />
    </>
  )
}

export default App
