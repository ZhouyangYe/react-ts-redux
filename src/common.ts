import Unit from './models/Unit';

export enum Rule{
    step = 20,
}

export const initial:Array<Unit> = [new Unit(40,0),new Unit(20,0),new Unit(0,0)];

export const last:Unit = new Unit(0,0);

export const G:any = {pressed: false, num_apple: 0};

export const acceleration:number = 100;

export const getApple = (units:Array<Unit>):Unit => {
    let apple = new Unit(0,0);
    let arr:Array<Unit> = [];

    let overlap = (snake:Array<Unit>,unit:Unit):boolean => {
        let result = false;
        for(let i=0;i<snake.length;i++){
            if(unit.axisX === snake[i].axisX && unit.axisY === snake[i].axisY){
                result = true;
            }
        }
        return result;
    }

    for(let i=0;i<25;i++)
    for(let j=0;j<25;j++){
        let unit = new Unit(Rule.step*i,Rule.step*j);
        if(!overlap(units,unit)){
            arr.push(unit);
        }
    }

    apple = arr[Math.floor(Math.random()*arr.length)]?arr[Math.floor(Math.random()*arr.length)]:apple;

    return apple;
}