import { combineReducers } from 'redux'
import megaNavReducer from './megaNavReducer'

const rootReducer = () => combineReducers({
    megaNav: megaNavReducer
})

export default rootReducer