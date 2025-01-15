import { Link } from "react-router";

function Home() {
    return(
        <>
            <h1>Tic Tac <c1>Toe</c1></h1>
            <h2>Gameplay mode</h2>
            <div className="select">
                <Link to="/game">Classic tic-tac-toe</Link>
                <Link to="/three">Three moves tic-tac-toe</Link>
                <a href="">Return to ongoing game</a>
            </div>
        </>
    )
}

export default Home;