import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {goUp,goDown,goLeft,goRight,move} from '../actions';
import {Snake} from "./Snake";

function mapStateToProps(state: any){
    return {
        units: state.snake,
        direction: state.direction
    };
}

function matchDispatchToProps(dispatch: any){
    return bindActionCreators({
        goUp: goUp,
        goDown: goDown,
        goLeft: goLeft,
        goRight: goRight,
        move: move
    },dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Snake);