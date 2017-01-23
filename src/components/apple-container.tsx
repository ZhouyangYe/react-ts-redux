import * as React from 'react';
import {connect} from 'react-redux';
import {Apple, StateProps} from './Apple';
import Unit from '../models/Unit';

function mapStateToProps(state: any):StateProps{
    return {
        apple: state.app.apple as Unit,
    };
}

export default connect(mapStateToProps)(Apple);