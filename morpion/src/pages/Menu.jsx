import { Link } from 'react-router'

import '../components/App/App.css'

function Menu() {
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="/ranking">Ranking</Link>
                <Link to="/game">Game</Link>
            </header>
        </>
    )
}

export default Menu;