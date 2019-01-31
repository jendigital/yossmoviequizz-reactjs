import React from 'react';
import './index.css'

export default function Highscores(props) {
    return (
        <div className='highscores'>
            <div className='highscore-title' onClick={props.resetHighscores}>
                Tableau des scores <div className='reset' onClick={props.resetHighscores}> Réinitialiser les scores </div>
            </div>
            <div className='highscore-header'>
                <div>Nom du joueur</div>
                <div>Score</div>
                <div>Durée</div>
            </div>
            {props.highscores.map((score, index) => {
                return <div className='highscore' key={'highscore' + index}>
                    <div>{score.player}</div>
                    <div>{score.correct}</div>
                    <div>{score.duration}</div>
                </div>
            })}
        </div>
    )
}

