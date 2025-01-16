import { useState, useEffect } from 'react';
import { Link } from 'react-router';

import cross from '../components/img/cross.svg';
import circle from '../components/img/circle.svg';

function Square({ value, squareClick }) {
    if (value === 'X') {
        return (
            <button className="case" onClick={squareClick}>
                <img src={cross} className="played" />
            </button>
        );
    } else if (value === 'O') {
        return (
            <button className="case" onClick={squareClick}>
                <img src={circle} className="played" />
            </button>
        );
    } else {
        return (
            <button className="case" onClick={squareClick}>
                {value}
            </button>
        );
    }
}

function Botgame() {
    const [xNext, setXNext] = useState(true);
    const [square, setSquare] = useState(Array(9).fill(null));
    const [player1, setPlayer1] = useState(0);
    const [player2, setPlayer2] = useState(0);
    const [tie, setTie] = useState(0);
    const [user, setUser] = useState(localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')): null)

    function click(i) {
        if (square[i] || Winner(square)) {
            return;
        }

        const next = square.slice();
        next[i] = 'X';
        setSquare(next);
        setXNext(false); // Pour le tour de 'O'
        // On enlève 'O' parce que cette fois c'est le bot qui va le jouer
    }

    useEffect(() => {
        if (!xNext && !Winner(square)) {
            bot(square);
        }
    }, [xNext, square]); // ici, je vérifie que si xNext est false, c'est au tour du bot de jouer

    function bot(next) {
        const empty = next
            .map((value, index) => (value === null ? index : null)) 
            .filter((value) => value !== null); // cette const cherche les cases vides dans le jeu pour que le bot puisse placer aléatoirement ses 'O"
            //elle vérifie que la case est vide et sinon elle retourne l'index de la case vide
            // il ne garde en mémoire que les cases vides pour voir sur lesquelles il peut jouer

        if (empty.length > 0) { // si il y a des cases vides
            const random = empty[Math.floor(Math.random() * empty.length)]; // pour obtenir un nombre entre 0 et la longueur du tableau des vides
            const update = next.slice();
            update[random] = 'O';
            setSquare(update);
            setXNext(true); // Pour remettre le tour de 'X'
        }
    }

    function vide() {
        setSquare(Array(9).fill(null));
        setXNext(true);
    }

    let status;
    let turn = "turn";
    let P1 = player1;
    let P2 = player2;
    const winner = Winner(square);
    if (winner === 'O') {
        status = "Winner : ";
        turn = <img src={circle} className="logoexample" />;
        P2++;
    } else if (winner === 'X') {
        status = "Winner : ";
        turn = <img src={cross} className="logoexample" />;
        P1++;
    } else {
        status = xNext ? (
            <img src={cross} className="logoexample" />
        ) : (
            <img src={circle} className="logoexample" />
        );

        if (full(square)) {
            const newTie = tie + 1;
            setTimeout(() => {
                setTie(newTie);
                vide();
            }, 2000);
        }
    }

    if (winner) {
        setTimeout(() => {
            setPlayer1(P1);
            setPlayer2(P2);
            vide();
        }, 3000);
    }

    function full(square) {
        return square.every((cell) => cell !== null);
    }

    return (
        <>
            <div className="container">
                <table className="gameboard" cellSpacing={20}>
                    <tr>
                        <td className="logos">
                            <img src={cross} className="logoexample" />{' '}
                            <img src={circle} className="logoexample" />
                        </td>
                        <td className="turn">{status} {turn}</td>
                        <td className="refreshing">
                            <button className="refresh material-symbols-outlined" onClick={vide}>
                                refresh
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Square value={square[0]} squareClick={() => click(0)} />
                        </td>
                        <td>
                            <Square value={square[1]} squareClick={() => click(1)} />
                        </td>
                        <td>
                            <Square value={square[2]} squareClick={() => click(2)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Square value={square[3]} squareClick={() => click(3)} />
                        </td>
                        <td>
                            <Square value={square[4]} squareClick={() => click(4)} />
                        </td>
                        <td>
                            <Square value={square[5]} squareClick={() => click(5)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Square value={square[6]} squareClick={() => click(6)} />
                        </td>
                        <td>
                            <Square value={square[7]} squareClick={() => click(7)} />
                        </td>
                        <td>
                            <Square value={square[8]} squareClick={() => click(8)} />
                        </td>
                    </tr>
                    <tr>
                        <td className="case bg1">
                            <player>x ({user[0]})</player><br />
                            <score>{player1}</score>
                        </td>
                        <td className="case bg2">
                            <player>tie</player><br />
                            <score>{tie}</score>
                        </td>
                        <td className="case bg3">
                            <player>o (BOT)</player><br />
                            <score>{player2}</score>
                        </td>
                    </tr>
                </table>
            </div>
            <Link to="/" className="quit">Quit</Link>
        </>
    );
}

function Winner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Botgame;
