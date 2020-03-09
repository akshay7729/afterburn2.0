import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../Redux/Reducers'
import logger from 'redux-logger'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from '../sagas';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const ConfigureStore = () => {
    const sagaMiddleware = createSagaMiddleWare();
    const store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(sagaMiddleware),
            composeEnhancers()
        )
    );
    sagaMiddleware.run(rootSaga)
    return store
}

export default ConfigureStore


