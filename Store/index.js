import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../Redux/Reducers'
import logger from 'redux-logger'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const ConfigureStore = () => {
    const store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(logger),
            composeEnhancers()
        )
    );
    return store
}

export default ConfigureStore


