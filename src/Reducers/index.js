import { combineReducers } from 'redux';
import DrinkInfo from './DrinkInfo';
import GetData from './GetData';

const Reducers = combineReducers({
    DrinkInfo, GetData
});

export default Reducers;

