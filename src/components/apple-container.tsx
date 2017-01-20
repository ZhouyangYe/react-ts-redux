import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Apple} from "./Apple";

function mapStateToProps(state: any){
    return {
        apple: state.apple
    };
}

export default connect(mapStateToProps)(Apple);