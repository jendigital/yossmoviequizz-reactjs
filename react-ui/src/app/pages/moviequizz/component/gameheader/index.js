import React from 'react';
import './index.css'

export default function GameHeader(props) {
    return (
        <div className='playing-header'>
            <div className='rightanswer'>
                Bonnes réponses : {props.correct} 
            </div>
            <div className='timer'>
                Durée du jeu :
                <div className='duration'>{props.duration} s</div>
            </div>
        </div>
    )
}
