import * as React from 'react';
import Unit from '../models/Unit';

export interface StateProps{
    units: Array<Unit>;
    direction: string;
    apple: Unit;
}
export interface DispatchProps{
    goUp: ()=>{};
    goDown: ()=>{};
    goLeft: ()=>{};
    goRight: ()=>{};
    move: (data:{direction:string,apple:Unit})=>{};
}

export class Snake extends React.Component<StateProps & DispatchProps ,any>{

    private timer:any;

    private componentDidMount(){
        window.addEventListener('keydown',this.handleKeyDown,false);
        this.timer = setInterval(()=>{
            this.handleMove({direction:this.props.direction,apple:this.props.apple});
        },800);
    }

    private  componentWillUnmount(){
        window.removeEventListener('keydown',this.handleKeyDown,false);
        clearInterval(this.timer);
    }

    private handleMove = (data:{direction:string,apple:Unit})=> {
        this.props.move(data);
    };

    private handleKeyDown = (e:any)=> {
        e.preventDefault();
        switch(e.key){
            case "ArrowUp":
                if(this.props.direction === "D" || this.props.direction === "U"){
                    return;
                }
                this.props.goUp();
                break;
            case "ArrowDown":
                if(this.props.direction === "U" || this.props.direction === "D"){
                    return;
                }
                this.props.goDown();
                break;
            case "ArrowLeft":
                if(this.props.direction === "R" || this.props.direction === "L"){
                    return;
                }
                this.props.goLeft();
                break;
            case "ArrowRight":
                if(this.props.direction === "L" || this.props.direction === "R"){
                    return;
                }
                this.props.goRight();
                break;
            default:
                return false;
        }
    };

    private createSnake = ()=> {
        let snake:Array<any> = [];
        let num:number = 0;
        this.props.units.map((unit:Unit)=>{
            snake.push(<div key={num} className="snake" style={{top:unit.axisY, left:unit.axisX}}></div>);
            num++;
        });
        return snake;
    };

    render(){
        return <div>{this.createSnake()}</div>
    }
}