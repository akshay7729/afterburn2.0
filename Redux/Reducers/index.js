import { combineReducers } from 'redux'
import megaNavReducer from './megaNavReducer'
import searchReducer from './searchReducer'
import plpReducer from './plpReducer'

const rootReducer = combineReducers({
    megaNav: megaNavReducer,
    search: searchReducer,
    plp: plpReducer
})

export default rootReducer