import React, { Component } from 'react';
import MainLayout from '../../layouts/default';
import './index.css'

import Play from '../../assets/img/play.png'

export default class MovieQuizz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            play: false,
        }

        this.playMode = this.playMode.bind(this)
    }

    playMode() {
        this.setState({
            play: true,
        })
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
                </div>
            </MainLayout>
        )
    }
}
