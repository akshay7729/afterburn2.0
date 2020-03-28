import {takeEvery, call, put} from 'redux-saga/effects'
import {MEGANAV, SEARCH, PLP} from '../Redux/Constants'
import {MegaNavApi, searchAutocompleteApi, PlpApi} from '../Api'

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

// plp watcher saga
function* handlePlpApi(){
    try{
        const data = yield call(PlpApi);
        yield put({
            type: PLP.RESPONSE,
            payload: data
        })
        console.log('plp api handle')
    }catch(e){
        console.log('plp api saga error', e.message);
        yield put({
            type: PLP.ERROR,
            payload: e.message
        })
    }
}

// root saga
function* rootSaga(){
    yield takeEvery(MEGANAV.LOAD, handleMegaNavLoad);
    yield takeEvery(SEARCH.LOAD, handleSearchApi);
    yield takeEvery(PLP.LOAD, handlePlpApi);
}

export default rootSaga