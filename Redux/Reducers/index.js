import { combineReducers } from 'redux'
import megaNavReducer from './megaNavReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    megaNav: megaNavReducer,
    search: searchReducer
})

export default rootReducer