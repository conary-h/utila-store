import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_EMPLOYEES } from '../actions/types';
import * as actions from '../actions';

// Workers
export function *fetchData() {

    const dataRawPromise = yield call(fetch, "http://dummy.restapiexample.com/api/v1/employees");
    
    const employees = yield dataRawPromise.json();
    
    yield put(actions.successEmployees(employees));
}

// Watchers
export function *fetchDataWatcher() {
    yield takeEvery(FETCH_EMPLOYEES, fetchData);
}