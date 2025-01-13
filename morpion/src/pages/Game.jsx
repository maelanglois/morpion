import cross from '../components/img/cross.svg'
import circle from '../components/img/circle.svg'

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
                    <tr>
                        <td className="case"><img src={cross} className="played"/></td>
                        <td className="case"><img src={circle} className="played"/></td>
                        <td className="case"><img src={cross} className="played"/></td>
                    </tr>
                    <tr>
                        <td className="case"><img src={circle} className="played"/></td>
                        <td className="case"><img src={cross} className="played"/></td>
                        <td className="case"><img src={cross} className="played"/></td>
                    </tr>
                    <tr>
                        <td className="case"><img src={cross} className="played"/></td>
                        <td className="case"><img src={cross} className="played"/></td>
                        <td className="case"><img src={cross} className="played"/></td>
                    </tr>
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