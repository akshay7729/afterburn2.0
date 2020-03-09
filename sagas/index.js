import {takeEvery} from 'redux-saga/effects'
import {MEGANAV} from '../Redux/Constants'

// wathcer saga
function* handleMegaNavLoad(){
    console.log('handle images load saga')
}

// root saga
function* rootSaga(){
    yield takeEvery(MEGANAV.LOAD, handleMegaNavLoad)
}

export default rootSaga