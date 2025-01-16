import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

function User(){
    const [user, setUser] = useState([""]);
    const [value, setValue] = useState('');
    const [content, setContent] = useState('');
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

    const handleChange = (event) => {
        setValue(event.target.value);
        setContent(event.target.content);
    }

    return(
        <>
            <h1>Entrer les <c1>joueurs</c1></h1>
            <form className="userform" onSubmit={setPlayer}>
                <label htmlFor="player1"><c1>Joueur 1</c1></label>
                <input type="text" id="player1" name="player1" onChange={handleChange}></input>
                <label htmlFor="player2" ><c2>Joueur 2</c2></label>
                <input type="text" id="player2" name="player2" onChange={handleChange}></input>
                <button type="submit" disabled={!value & !content}>Jouer</button>
            </form>
        </>
    )
}

export default User;