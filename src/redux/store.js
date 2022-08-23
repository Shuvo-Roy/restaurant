import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import{Reducer} from './reducer';

const myStore = createStore(Reducer ,applyMiddleware(logger));

export default myStore;