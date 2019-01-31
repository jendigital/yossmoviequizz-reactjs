import React, { Component } from 'react';
import MainLayout from '../../layouts/default';
import GameHeader from './component/gameheader'
import GameContent from './component/gamecontent'
import GameOver from './component/gameover'
import './index.css'

import { fetchPopularMovie, fetchPopularActor, fetchActorMovies } from '../../services/fetch'
import { getRandomInt, getRandomBoolean, imgPath } from '../../services/utils'

import Play from '../../assets/img/play.png'
import Highscores from './component/highscores';

export default class MovieQuizz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            actor: null,
            actors: [],
            alert: false,
            answer: 1,
            correct: 0,
            current_actor: 0,
            current_movie: 0,
            displayScore: false,
            duration: 0,
            game_over: false,
            highscores: [],
            movie: null,
            movies: [],
            play: false,
            player: '',
            playing: false,
            welldone: null
        }

        this.agree = this.agree.bind(this)
        this.disagree = this.disagree.bind(this)
        this.onChange = this.onChange.bind(this)
        this.playMode = this.playMode.bind(this)
        this.resetHighscores = this.resetHighscores.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.saveScore = this.saveScore.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
    }

    componentDidMount() {
        fetchPopularMovie(getRandomInt()).then(movies => {
            this.setState({
                movies: movies.results,
            })
        })

        fetchPopularActor(getRandomInt()).then(actors => {
            this.setState({
                actors: actors.results,
            })
        })
    }

    agree() {
        if(this.state.answer === 1) {
            this.setState({
                welldone: true,
                correct: this.state.correct + 1
            })

            setTimeout(function(){
                this.setState({
                    welldone: false,
                    answer: getRandomBoolean(),
                    current_actor: (this.state.current_actor + 1)
                });
            }.bind(this), 1000);
        } else {
            //check the actor play in the movie
            fetchActorMovies(this.state.actors && this.state.actors[this.state.current_actor] && this.state.actors[this.state.current_actor].id).then((actor) => {
                actor && actor.results && actor.results.map(movie =>{
                    if(movie.id === this.state.movies && this.state.movies[this.state.current_movie].id) {
                        this.setState({
                            answer: 1
                        })
                        this.agree();
                    }

                    return true
                })
            })

            this.setState({
                game_over: true,
                playing: false
            })

            this.stopTimer();

            setTimeout(function(){ 
                this.setState({
                    game_over: false
                });
            }.bind(this), 1000);
        }

        if(this.state.current_actor === 19) {
            fetchPopularActor(getRandomInt()).then(actors => {
                this.setState({
                    actors: actors.results
                })
            })

            this.setState({
                current_actor: 0
            })
        }

        if(this.state.current_movie === 19) {
            fetchPopularMovie(getRandomInt()).then(movies => {
                this.setState({
                    movies: movies.results
                })
            })

            this.setState({
                current_movie: 0
            })
        }
    }

    disagree() {
        //check the actor play in the movie
        fetchActorMovies(this.state.actors && this.state.actors[this.state.current_actor].id).then(actor => {
            actor && actor.results && actor.results.map(movie =>{
                if(movie.id === this.state.movies && this.state.movies[this.state.current_movie].id) {
                    this.setState({
                        answer: 1
                    })
                }

                return true
            })
        })

        if(this.state.answer === 0) {
            this.setState({
                welldone: true,
                correct: this.state.correct + 1
            })

            setTimeout(function(){ 
                this.setState({
                    welldone: false,
                    answer: getRandomBoolean(),
                    current_movie: (this.state.current_movie + 1),
                    current_actor: (this.state.current_actor + 1)
                });
            }.bind(this), 1000);
        } else {
            this.setState({
                game_over: true,
                playing: false
            })

            this.stopTimer();

            setTimeout(function(){ 
                this.setState({
                    game_over: false
                });
            }.bind(this), 1000);
        }

        if(this.state.current_actor === 19) {
            fetchPopularActor(getRandomInt()).then(actors => {
                this.setState({
                    actors: actors.results
                })
            })

            this.setState({
                current_actor: 0
            })
        }

        if(this.state.current_movie === 19) {
            fetchPopularMovie(getRandomInt()).then(movies => {
                this.setState({
                    movies: movies.results
                })
            })

            this.setState({
                current_movie: 0
            })
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            alert: false
        });
    }

    playMode() {
        this.setState({
            play: true,
            playing: true,
            correct: 0,
            displayScore: false,
            duration: 0
        })

        this.startTimer();
    }

    resetTimer() {
        this.setState({duration: 0})
    }

    startTimer() {
        this.timer = setInterval(() => this.setState({
            duration: this.state.duration + 1
        }), 1000)
    }

    stopTimer() {
        clearInterval(this.timer)
    }

    saveScore() {
        if(this.state.player === '') {
            this.setState({
                alert: true
            })
        }

        const highscores = this.state.highscores;

        highscores.push({
            correct: this.state.correct,
            duration: this.state.duration,
            player: this.state.player,
        })

        highscores.sort((scoreA, scoreB) => {
            if (scoreA.correct < scoreB.correct){
                return -1;
            }
            if (scoreA.correct > scoreB.correct) {
                return 1;
            }
            return 0;
        })

        this.setState({
            highscores: highscores,
            displayScore: true,
        })
    }

    resetHighscores() {
        this.setState({
            highscores: []
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
                    { this.state.play &&
                        <div className='playing'>
                            <GameHeader correct={this.state.correct} duration={this.state.duration} />
                            {this.state.playing && this.state.answer === 1 &&  
                                <GameContent actor_name={this.state.actors && this.state.actors[this.state.current_actor].name} 
                                actor_img={imgPath(this.state.actors && this.state.actors[this.state.current_actor].profile_path)}
                                agree={this.agree} disagree={this.disagree} movie_name={this.state.actors && this.state.actors[this.state.current_actor].known_for[0].title} 
                                movie_img={imgPath(this.state.actors && this.state.actors[this.state.current_actor].known_for[0].poster_path)} /> 
                            }
                            {this.state.playing && this.state.answer === 0 &&  
                                <GameContent actor_name={this.state.actors && this.state.actors[this.state.current_actor].name} 
                                actor_img={imgPath(this.state.actors && this.state.actors[this.state.current_actor].profile_path)}
                                agree={this.agree} disagree={this.disagree} movie_name={this.state.movies && this.state.movies[this.state.current_movie].title} 
                                movie_img={imgPath(this.state.movies && this.state.movies[this.state.current_movie].poster_path)} /> 
                            }
                            { this.state.welldone && <h4 className='correct'> Bien joué! </h4> }
                            {!this.state.playing && !this.state.displayScore && 
                                <GameOver game_over={this.state.game_over} correct={this.state.correct} empty={this.state.empty} highscores={this.state.highscores} onChange={this.onChange} saveScore={this.saveScore} />
                            }
                            {
                                this.state.displayScore && 
                                <Highscores highscores={this.state.highscores} resetHighscores={this.resetHighscores} />
                            }
                            {
                                !this.state.playing &&
                                <div className='replay'>
                                    <h5>Replay</h5>
                                    <img alt='replay' src={Play} onClick={this.playMode}/>
                                </div>
                            }
                        </div>
                    }
                </div>
            </MainLayout>
        )
    }
}
