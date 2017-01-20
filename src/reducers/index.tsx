import {combineReducers} from 'redux';
import SnakeReducer from './reducer-snake';
import AppleReducer from './reducer-apple';
import ControlReducer from './reducer-control';

const allReducers = combineReducers({
    snake: SnakeReducer,
    apple: AppleReducer,
    direction: ControlReducer,
});

export default allReducers;