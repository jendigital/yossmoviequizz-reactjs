import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

const IndexReducer = combineReducers({
    router: routerReducer
})

export default IndexReducer
