import {combineReducers} from 'redux';
import SnakeReducer from './reducer-snake';
import AppleReducer from './reducer-apple';

const allReducers = combineReducers({
    snake: SnakeReducer,
    apple: AppleReducer
});

export default allReducers;