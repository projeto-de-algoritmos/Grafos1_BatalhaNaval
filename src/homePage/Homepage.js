import React, { useState, useEffect } from 'react'

import criaTabuleiro from '../CriaTabuleiro';


import "./homepage.css"
import waveIcon from "../assets/wave.png";
import battleshipIcon from "../assets/battleship.png";
import questionMarkIcon from "../assets/question.png";
import arrowIcon from "../assets/arrow.png"



export default function Homepage() {

    const [playerState, setPlayerState] = useState([]);

    const [newPlayerState, setNewPlayerState] = useState(criaTabuleiro());
    const [playerScore, setPlayerScore] = useState(0);

    const [enemyState, setEnemyState] = useState([]);

    const [newEnemyState, setNewEnemyState] = useState(criaTabuleiro());

    const [enemyScore, setEnemyScore] = useState(0);

    const [turn, setTurn] = useState("player");

    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        // console.log({ chute: chute() })
        if (turn === "enemy") {
            var myTimeout = setTimeout(chama, 900);
            // myTimeout = setTimeout(() => false, 5000000);

        }
        if (playerState !== newPlayerState)
            setPlayerState(newPlayerState);
        if (enemyState !== newEnemyState)
            setEnemyState(newEnemyState);

        // console.log(criaTabuleiro())
        return () => {

            // clearTimeout(myTimeout);

        }
    }, [trigger])


    function chama() {
        chute()
    }

    const [chutados,setChutados] = useState([]);

    function chute() {


        var y = Math.floor(Math.random() * 10);
        var x = Math.floor(Math.random() * 10);

        if (x === 10 || y === 10) {
            chama();
            return;
        }

        if (chutados.indexOf(y + '' + x) !== -1) {
            console.log({ ah: "não", y, x })

            chama();
            return;
        }



        console.log(chutados.indexOf(y + '' + x))
        // chutados.splice(1, 0, y + '' + x);
        setChutados([...chutados, y + '' + x])

        console.log({ chutados })
        verify(y, x, "player")

        setTurn("player");

        return { x, y };



    }





    function verify(y_index, x_index, owner) {
        var auxBoard;

        if (owner === "player") {
            // setTurn("player")
            auxBoard = newPlayerState;

            switch (auxBoard[y_index][x_index]) {

                case 0:
                    auxBoard[y_index][x_index] = -1;
                    break;

                case 1: auxBoard[y_index][x_index] = 2;
                    setPlayerScore(playerScore + 1);
                    break;

                default:
                    break;
            }

            setNewPlayerState(auxBoard);
        } else {
            setTurn("enemy")

            auxBoard = newEnemyState;

            switch (auxBoard[y_index][x_index]) {

                case 0:
                    auxBoard[y_index][x_index] = -1;
                    break;

                case 1: auxBoard[y_index][x_index] = 2;
                    setEnemyScore(enemyScore + 1);
                    break;

                default:
                    break;
            }

            setNewEnemyState(auxBoard);

        }

        setTrigger(trigger + 2)

    }


    function ButtonImg({ value, owner }) {


        if (owner === "player") {
            if (value == 0)
                return <img className='btnImage' src={waveIcon} />

            if (value == 1)
                return <img className='btnImage' src={battleshipIcon} />

        }

        if (value == -1)
            return <img className='btnImage' src={waveIcon} />

        if (value == 2)
            return <img className='btnImage' src={battleshipIcon} />

        return <img className='btnImage' src={questionMarkIcon} />


    }


    function ShowBoard({ board, owner }) {
        return (

            board.map((line, y_index) => (
                <div className='line' key={y_index}>

                    {line.map((item, x_index) => {
                        return <button
                            key={y_index + "" + x_index}
                            className={"ship-" + item}
                            disabled={owner == turn}
                            onClick={() => verify(y_index, x_index, owner)}>

                            <ButtonImg owner={owner} value={item} />
                        </button>;
                    })}

                </div>
            ))

        )
    }


    if (enemyScore >= 15) {
        return <h1 className='endTitle'> Voce Ganhou!</h1>
    }

    if (playerScore >= 15) {
        return <h1 className='endTitle'> Voce Perdeu!</h1>
    }

    return (
        <>
            <div className="leaderboard">
                <h2 > Pontuação </h2>

                <h1 className='score'>
                    {enemyScore} - {playerScore}
                </h1>
            </div>

            <div className='boards'>
                <div className='singleBoard'>
                    <img className={turn === "player" ? "arrowImage" : "hiddenArrowImage"} src={arrowIcon} />
                    <h1 className='playerHeader'>Jogador</h1>

                    <ShowBoard board={playerState} owner="player" />

                </div>
                <div className='singleBoard'>
                    <img className={turn === "enemy" ? "arrowImage" : "hiddenArrowImage"} src={arrowIcon} />
                    <h1 className='playerHeader' >Oponente</h1>

                    <ShowBoard board={enemyState} owner="enemy" />

                </div>
            </div>
        </>
    )
}
