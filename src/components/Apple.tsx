import * as React from 'react';
import Unit from '../models/Unit';

export interface StateProps{
    apple: Unit;
}

export class Apple extends React.Component<StateProps,void>{
    render(){
        return <div className="apple" style={{top:this.props.apple.axisY, left:this.props.apple.axisX}}></div>
    }
}