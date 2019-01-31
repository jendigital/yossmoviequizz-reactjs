import React from 'react';
import './index.css'

export default function GameContent(props) {
    return (
        <div className='question'>
            <h4>
                Est-ce que { props.actor.name } a joué dans { props.movie.name } ?
            </h4>
            <div className='posters'>
                <img className='actor' alt='actor' src={props.actor.img} />
                <img className='movie' alt='movie' src={props.movie.img} />
            </div>
            <div className='answer'>
                <div className='answer_button yes' onClick={props.agree}>Oui</div>
                <div className='answer_button' onClick={props.disagree}>Non</div>
            </div>
        </div>
    )
}
