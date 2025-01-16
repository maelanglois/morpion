import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Player(){
    const [user, setUser] = useState([""]);
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    function setPlayer(u) {
        u.preventDefault();
        const player1 = document.querySelector('#player1').value;
        if(player1 != '') {
            setUser([player1])
        }
        navigate('/botgame');
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return(
        <>
            <h1>Entrer le <c1>joueur</c1></h1>
            <form className="userform" onSubmit={setPlayer}>
                <label htmlFor="player1"><c1>Joueur</c1></label>
                <input type="text" id="player1" name="player1" onChange={handleChange}></input>
                <button type="submit" disabled={!value}>Jouer</button>
            </form>
        </>
    )
}

export default Player;