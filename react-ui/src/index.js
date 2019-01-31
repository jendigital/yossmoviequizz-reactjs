import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'

import './index.css'

import 'bootstrap/dist/css/bootstrap.css'

import App from './app/app'

import createHistory from 'history/createBrowserHistory'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

ReactDOM.render(
    <Router history={history}>
        <App history={history} />
    </Router>,
    document.getElementById('app')
);
