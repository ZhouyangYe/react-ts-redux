import * as React from 'react';
import Unit from '../models/Unit';

interface SnakeProps{
    units: any;
    goUp: any;
    goDown: any;
    goLeft: any;
    goRight: any;
    move: any;
    direction: String;
}

export class Snake extends React.Component<SnakeProps ,void>{

    public static defaultProps = {
        units: [{axisX:0,axisY:0},{axisX:20,axisY:0},{axisX:40,axisY:0}],
        direction: "R",
    }

    private componentDidMount(){
        window.addEventListener('keydown',this.handleKeyDown,false);

        setInterval(this.handleMove,800);
    }

    private handleMove = () => {
        let dir = this.props.direction;
        this.props.move(dir);
    }

    private handleKeyDown = (e:any) => {
        e.preventDefault();
        switch(e.key){
            case "ArrowUp":
                this.props.goUp();
                break;
            case "ArrowDown":
                this.props.goDown();
                break;
            case "ArrowLeft":
                this.props.goLeft();
                break;
            case "ArrowRight":
                this.props.goRight();
                break;
            default:
                return false;
        }
    }

    private createSnake(){
        let snake:Array<any> = [];
        let num = 0;
        this.props.units.map((unit:Unit)=>{
            snake.push(<div key={num} className="snake" style={{top:unit.axisY, left:unit.axisX}}></div>);
            num++;
        });
        return snake;
    }

    render(){
        return <div>{this.createSnake()}</div>
    }
}