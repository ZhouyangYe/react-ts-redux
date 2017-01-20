import * as React from 'react';
import Unit from '../models/Unit';

interface SnakeProps{
    apple: Unit;
}

export class Apple extends React.Component<SnakeProps ,void>{

    public static defaultProps = {
        apple: {axisX:300,axisY:300},
    }

    render(){
        return <div className="apple" style={{top:this.props.apple.axisY, left:this.props.apple.axisX}}></div>
    }
}