import {takeEvery, call, put} from 'redux-saga/effects'
import {MEGANAV, SEARCH} from '../Redux/Constants'
import {MegaNavApi, searchAutocompleteApi} from '../Api'

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

// search watcher saga
function* handleSearchApi(){
    try{
        const data = yield call(searchAutocompleteApi);
        yield put({
            type: SEARCH.RESPONSE,
            payload: data
        });
        console.log('handleSearchApi');
    }catch(e){
        console.log('search error',e);
        yield put({
           type: SEARCH.ERROR,
           payload: e.message 
        })
    }
}

// root saga
function* rootSaga(){
    yield takeEvery(MEGANAV.LOAD, handleMegaNavLoad);
    yield takeEvery(SEARCH.LOAD, handleSearchApi)
}

export default rootSaga