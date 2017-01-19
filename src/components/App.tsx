import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {goUp,goDown,goLeft,goRight} from '../actions';

class Snake extends React.Component<undefined ,undefined>{
    render(){
        return <div className="snake"></div>
    }
}

function mapStateToProps(state){
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        goUp: goUp,
        goDown: goDown,
        goLeft: goLeft,
        goRight: goRight
    },dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Snake);

export const App = ()=>{
    return <div id="wrap">
        <Snake />
    </div>;
};