import { useState, useEffect } from 'react';

function Ranking() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem('scores'));
        const sort = Object.entries(store)
            .map(([player, data]) => ({ player, ...data }))
            .sort((a, b) => b.wins - a.wins);
        setScores(sort);
    }, []);

    return (
        <>
            <h1><c1>Global</c1> ranking</h1>
            <table className="score-table" cellSpacing={20}>
                {scores.map((score, index) => (
                    <tr key={index}>
                        <td>
                            <div className="ranking">#{index + 1}</div>
                            <div className="name-rank">{score.player}</div>
                            <div className="score-details">
                                Wins: {score.wins} | Ties: {score.ties}
                            </div>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    );
}

export default Ranking;
