import React, { Component } from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

import MovieQuizz from './pages/moviequizz'
import NotFound from './pages/notfound'

import './app.css'

class App extends Component {
    render() {
        return (
            <div id="container">
                <Switch>
                    <Route exact path='/' render={() => <MovieQuizz store={this.props.store} history={this.props.history} />} />
                    <Route exact path='/moviequizz' render={() => <MovieQuizz store={this.props.store} history={this.props.history} />} />
                    <Route path='*' render={() => <NotFound store={this.props.store} history={this.props.history} />} />
                </Switch >
            </div>
        )
    }
}

export default App
