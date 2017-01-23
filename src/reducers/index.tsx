import {combineReducers} from 'redux';
import {AppReducer, ControlReducer} from './reducer-snake';

const allReducers = combineReducers({
    app: AppReducer,
    direction: ControlReducer,
});

export default allReducers;