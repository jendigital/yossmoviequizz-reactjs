import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import Yoss from '../../../../assets/img/yoss.png'
import Movie from '../../../../assets/img/movie.jpg'

export default class Header extends Component {
    render() {
        return (
            <div id='header'>
                <Link to='/'>
                    <img id='yoss' alt='yoss' src={Yoss} />
                    <h2>Movie Quizz</h2>
                    <img id='movie' alt='movie' src={Movie} />
                </Link>
            </div>
        );
    }
}