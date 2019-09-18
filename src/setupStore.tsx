import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

function setupStore(initialState:any) {

  // Reducers
  const rootReducer = () => [];


  // Middleware
  const sagaMiddleware = createSagaMiddleware();

  const middleware = applyMiddleware(...[
    sagaMiddleware
  ]);


  // Store
  const store = createStore(
    rootReducer,
    initialState,
    middleware,
  );

  // Sagas
  sagaMiddleware.run(rootSaga);

  return store;
}

export default setupStore;
