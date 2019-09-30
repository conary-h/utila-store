import { takeEvery, call, put } from 'redux-saga/effects';
import { EMPLOYEES_WATCHER } from '../actions/types';
import * as actions from '../actions';

export function *fetchData() {

    const dataRawPromise = yield call(fetch, "http://dummy.restapiexample.com/api/v1/employees");
    
    const realData = yield dataRawPromise.json();
    
    yield put(actions.requestEmployees(realData));
}

export function *fetchDataWatcher() {
    yield takeEvery(EMPLOYEES_WATCHER, fetchData);
}