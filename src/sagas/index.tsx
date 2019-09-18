import { all, fork } from 'redux-saga/effects';

function* helloSaga() {

  console.log('Saga is alive!!!');
}


function* rootSaga() {
    yield all([
        fork(helloSaga),
    ]);
}


export default rootSaga;