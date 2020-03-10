import {takeEvery, call, put} from 'redux-saga/effects'
import {MEGANAV} from '../Redux/Constants'
import {MegaNavApi} from '../Api'

// wathcer saga
function* handleMegaNavLoad(){
    try{
        const data = yield call(MegaNavApi);
        yield put({
            type: MEGANAV.RESPONSE,
            payload: data
        });
        console.log('mega nav saga hit successfully')
    }catch(e){
        console.log('mega nav saga error', e);
        yield put({
            type: MEGANAV.ERROR,
            payload: e.message
        })
    }
}

// root saga
function* rootSaga(){
    yield takeEvery(MEGANAV.LOAD, handleMegaNavLoad)
}

export default rootSaga