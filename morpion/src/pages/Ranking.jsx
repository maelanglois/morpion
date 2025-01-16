import { useState } from "react";
import User from "../components/models/User";

function Ranking() {

    return (
        <>
            <h1><c1>Top 5</c1> ranking</h1>
            <table className="score-table" cellSpacing={20}>
                <tr>
                    <td>
                        <div className="ranking">#01</div>
                        <User />
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="ranking">#02</div>
                        <div className="name-rank">{players[0]}</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="ranking">#03</div>
                        <div className="name-rank">{players[2]}</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="ranking">#04</div>
                        <div className="name-rank"></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="ranking">#05</div>
                        <div className="name-rank"></div>
                    </td>
                </tr>
            </table>
        </>
    )
}

// const players = ["pseudo", "pseudonyme", "utilisateur"]

export default Ranking;