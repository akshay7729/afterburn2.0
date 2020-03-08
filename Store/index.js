import { createStore, compose } from 'redux'
import rootReducer from '../Redux/Reducers'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const ConfigureStore = () => {
    const store = createStore(rootReducer, composeEnhancers());
    return store
}

export default ConfigureStore


