import { useState } from 'react'

import cross from '../components/img/cross.svg'
import circle from '../components/img/circle.svg'

function Square({ value, squareClick }) {

    return(
        <>
            <button className="case" onClick={squareClick}>
                {value}
            </button>
        </>
    )
}

function Gameboard() {
    const [xNext, setXNext] = useState(true);
    const[square, setSquare] = useState(Array(9).fill(null));

    function click(i) {
        if(square[i] || Winner(square)) {
            return;
        }

        const next = square.slice();

        if(xNext) {
            next[i] = <img src={cross} className="played"/>;
        } else {
            next[i] = <img src={circle} className="played"/>;
        }

        setSquare(next);
        setXNext(!xNext);
    }

    const winner = Winner(square);
    let status;
    const turn = "turn";
    if(winner) {
        status = "Winner : " + winner;
    } else {
        status = (xNext ? <img src={cross} className="logoexample"/> : <img src={circle} className="logoexample"/>);
    }

    return (
        <>
            <tr>
                <td className='logos'>
                    <img src={cross} className="logoexample"/> <img src={circle} className="logoexample"/>
                </td>
                <td className="turn">{status} {turn}</td>
                <td className='refreshing'>
                    <button className="refresh material-symbols-outlined">refresh</button>
                </td>
            </tr>
            <tr>
                <td>
                    <Square value={square[0]} squareClick={() => click(0)}/>
                </td>
                <td>
                    <Square value={square[1]} squareClick={() => click(1)}/>
                </td>
                <td>
                    <Square value={square[2]} squareClick={() => click(2)}/>
                </td>
            </tr>
            <tr>
                <td>
                    <Square value={square[3]} squareClick={() => click(3)}/>
                </td>
                <td>
                    <Square value={square[4]} squareClick={() => click(4)}/>
                </td>
                <td>
                    <Square value={square[5]} squareClick={() => click(5)}/>
                </td>
            </tr>
            <tr>
                <td>
                    <Square value={square[6]} squareClick={() => click(6)}/>
                </td>
                <td>
                    <Square value={square[7]} squareClick={() => click(7)}/>
                </td>
                <td>
                    <Square value={square[8]} squareClick={() => click(8)}/>
                </td>
            </tr>
        </>
    )
}

function Winner(square) {
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

    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a];
        }
    }
    return null;
}

function Game() {
    return(
        <>
            <div className="container">
                <table className="gameboard" cellSpacing={20}>
                    
                    <Gameboard />
                    <tr>
                        <td className="case bg1">
                            <player>x (P1)</player><br></br>
                            <score>14</score>
                        </td>
                        <td className="case bg2">
                            <player>tie</player><br></br>
                            <score>14</score>
                        </td>
                        <td className="case bg3">
                            <player>x (P2)</player><br></br>
                            <score>14</score>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Game;