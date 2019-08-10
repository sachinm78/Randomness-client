import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import superheros from './reducers/superherosReducer'
import starwars_data from './reducers/starwarsReducer'
import hipster_data from './reducers/hipsterIpsumReducer'
import dev_data from './reducers/smartDevReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    superheros,
    starwars_data,
    hipster_data,
    dev_data
})

export default createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),

  ));