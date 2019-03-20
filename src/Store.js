import { createStore, applyMiddleware } from 'redux';
import Reducers from './Reducers';
import InitialState from './InitialState';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const Store = createStore(Reducers, InitialState, applyMiddleware(thunk, createLogger()));

export default Store;