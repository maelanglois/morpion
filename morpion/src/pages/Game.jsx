import { useState } from 'react'

import cross from '../components/img/cross.svg'
import circle from '../components/img/circle.svg'

function Square({ value, squareClick }) {

    if(value == 'X'){
        return(
            <>
                <button className="case" onClick={squareClick}>
                    <img src={cross} className="played"/>
                </button>
            </>
        )
    } else if(value == 'O') {
        return(
            <>
                <button className="case" onClick={squareClick}>
                    <img src={circle} className="played"/>
                </button>
            </>
        )
    } else {
        return(
            <>
                <button className="case" onClick={squareClick}>
                    {value}
                </button>
            </>
        )
    }
}

function Gameboard() {
    const [xNext, setXNext] = useState(true);
    const [square, setSquare] = useState(Array(9).fill(null));
    const [player1, setPlayer1] = useState(0);
    const [player2, setPlayer2] = useState(0);
    const [tie, setTie] = useState(0);

    function click(i) {
        if(square[i] || Winner(square)) {
            return;
        }

        const next = square.slice();

        if(xNext) {
            next[i] = 'X';
        } else {
            next[i] = 'O';
        }

        setSquare(next);
        setXNext(!xNext);
    }

    function vide() {
        setSquare(Array(9).fill(null))
    }

    let status;
    let turn = "turn";
    let P1 = player1;
    let P2 = player2;
    const winner = Winner(square);
    if(winner == 'O') {
        status = "Winner : ";
        turn = <img src={circle} className="logoexample"/>;
        P2++;
    } else if(winner == 'X'){
        status = "Winner : ";
        turn = <img src={cross} className="logoexample"/>;
        P1++;
    }
    else {
        status = (xNext ? <img src={cross} className="logoexample"/> : <img src={circle} className="logoexample"/>);
        const tiying = full(square);
    }

    if(winner) {
        setTimeout (() => {
            setPlayer1(P1);
            setPlayer2(P2);
            vide();
        }, 3000)
    }

    function full(square) {
        let tye = tie;
        for(let i = 0; i < square.length; i++) {
            if(square[i] === null) {
                return;
            }
        }
        tye++;
        setTimeout(() => { 
            setTie(tye);
            vide();
        })
    }

    return (
        <>
            <div className="container">
            <table className="gameboard" cellSpacing={20}>
                <tr>
                    <td className='logos'>
                        <img src={cross} className="logoexample"/> <img src={circle} className="logoexample"/>
                    </td>
                    <td className="turn">{status} {turn}</td>
                    <td className='refreshing'>
                        <button className="refresh material-symbols-outlined" onClick={vide}>refresh</button>
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
                <tr>
                    <td className="case bg1">
                        <player>x (P1)</player><br></br>
                        <score>{player1}</score>
                    </td>
                    <td className="case bg2">
                        <player>tie</player><br></br>
                        <score>{tie}</score>
                    </td>
                    <td className="case bg3">
                        <player>o (P2)</player><br></br>
                        <score>{player2}</score>
                    </td>
                </tr>
            </table>
        </div>
    </>
    )
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

export default Gameboard;