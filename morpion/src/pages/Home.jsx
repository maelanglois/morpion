import { Link } from "react-router";

function Home() {
    return(
        <>
            <h1>Tic Tac <c1>Toe</c1></h1>
            <h2>Gameplay mode</h2>
            <div className="select">
                <Link to="/login">Classic tic-tac-toe</Link>
                <Link to="/loginbot">Classic against bot</Link>
                <a href="">Return to ongoing game</a>
            </div>
        </>
    )
}

export default Home;