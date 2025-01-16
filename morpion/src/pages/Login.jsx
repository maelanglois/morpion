import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

function User(){
    const [user, setUser] = useState([""]);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    function setPlayer(u) {
        u.preventDefault();
        const player1 = document.querySelector('#player1').value;
        const player2 = document.querySelector('#player2').value;
        if(player1 != '' && player2 != '') {
            setUser([player1, player2])
        }
        navigate('/game');
    }

    return(
        <>
            <h1>Entrer les <c1>joueurs</c1></h1>
            <form className="userform" onSubmit={setPlayer}>
                <label htmlFor="player1"><c1>Joueur 1</c1></label>
                <input type="text" id="player1" name="player1"></input>
                <label htmlFor="player2" ><c2>Joueur 2</c2></label>
                <input type="text" id="player2" name="player2"></input>
                <button type="submit">Jouer</button>
            </form>
        </>
    )
}

export default User;