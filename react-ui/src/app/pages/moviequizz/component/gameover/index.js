import React from 'react';
import './index.css'
import { isHighscore } from '../../../../services/utils'

export default function GameOver(props) {
    return (
        <div className='gameover'> 
            { props.game_over &&  <h4>Game Over</h4> }
            { (props.highscores.length < 10 || isHighscore(props.highscores, props.correct)) &&
                <div className='register'> 
                    C'est une de vos meilleures partie, quel est votre prénom? 
                    <div className='score' ><input type='text' name='player' value={props.player} onChange={props.onChange} /> <button onClick={props.saveScore}>Enregistrer mon score</button></div>
                    { props.empty  && <div className='alert'> N'oubliez pas de rentrer votre nom! </div> }
                </div>
            }
        </div> 
    )
}
