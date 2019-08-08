import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import superheros from './reducers/superherosReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    superheros 
})

export default createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),

  ));