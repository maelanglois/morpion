import { Link, Route, Routes } from 'react-router'

import '../components/App/App.css'

import Home from './Home'
import Ranking from './Ranking'
import Game from './Game'

export default function Menu() {
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="/ranking">Ranking</Link>
                <Link to="/game">Game</Link>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </>
    )
}