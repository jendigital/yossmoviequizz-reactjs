import React, { Component } from 'react';
import MainLayout from '../../layouts/default';
import GameHeader from './component/gameheader'
import GameContent from './component/gamecontent'
import './index.css'

import Amber from './Amber-Heard.jpg'
import Aquaman from './Aquaman.jpg'

import Play from '../../assets/img/play.png'

export default class MovieQuizz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            actor: {
                name: 'Amber heard',
                img: 'https://resize-parismatch.ladmedia.fr/img/var/news/storage/images/paris-match/people-a-z/amber-heard/6055468-4-fre-FR/Amber-Heard.jpg'
            },
            correct: 0,
            duration: 0,
            movie: {
                name: 'Aquaman',
                img: 'http://fr.web.img2.acsta.net/c_215_290/pictures/18/12/13/12/12/2738771.jpg'
            },
            play: false,
        }

        this.agree = this.agree.bind(this)
        this.disagree = this.disagree.bind(this)
        this.playMode = this.playMode.bind(this)
    }

    playMode() {
        this.setState({
            play: true,
        })
    }

    agree() {

    }

    disagree() {

    }

    render() {
        return (
            <MainLayout>
                <div className='game'>
                    { !this.state.play && 
                        <div className='play'>
                            <h3>Play</h3>
                            <img alt='play' src={Play} onClick={this.playMode}/>
                        </div>
                    }
                    { this.state.play &&
                        <div className='playing'>
                            <GameHeader correct={this.state.correct} duration={this.state.duration} />
                            <GameContent actor={this.state.actor} movie={this.state.movie} agree={this.agree} disagree={this.disagree} />
                        </div>
                    }
                </div>
            </MainLayout>
        )
    }
}
