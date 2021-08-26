import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers/reducer'
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
export default store;
sagaMiddleware.run(sagas);