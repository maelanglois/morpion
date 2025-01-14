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
    const[square, setSquare] = useState(Array(9).fill(null));

    function click(i) {
        const next = square.slice();
        next[i] = <img src={cross} className="played"/>;
        setSquare(next);
    }

    return (
        <>
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

function Game() {
    return(
        <>
            <div className="container">
                <table className="gameboard" cellSpacing={20}>
                    <tr>
                        <td className='logos'>
                            <img src={cross} className="logoexample"/> <img src={circle} className="logoexample"/>
                        </td>
                        <td className="turn"><img src={cross} className="logoexample"/> turn</td>
                        <td className='refreshing'>
                            <button className="refresh material-symbols-outlined">refresh</button>
                        </td>
                    </tr>
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