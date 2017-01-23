import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {goUp,goDown,goLeft,goRight,move} from '../actions';
import {Snake} from "./Snake";
import Unit from '../models/Unit';
import {StateProps, DispatchProps} from './Snake';

function mapStateToProps(state: any):StateProps {
    return {
        units: state.app.units as Array<Unit>,
        direction: state.direction as string,
        apple: state.app.apple as Unit,
        gameOver: state.app.gameOver as boolean,
    };
}

function matchDispatchToProps(dispatch: any):DispatchProps {
    return bindActionCreators({
        goUp: goUp as ()=>{},
        goDown: goDown as ()=>{},
        goLeft: goLeft as ()=>{},
        goRight: goRight as ()=>{},
        move: move as (data:{direction:string,apple:Unit})=>{},
    },dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Snake);