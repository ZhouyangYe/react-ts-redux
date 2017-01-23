import {Rule, initial, last} from '../common';
import Unit from '../models/Unit';
import {random, G} from '../common';

function moveTail(arr:Array<Unit>){
    for(let i=arr.length-1;i>0;i--){
        arr[i].axisX = arr[i-1].axisX;
        arr[i].axisY = arr[i-1].axisY;
    }
}

export function AppReducer(state:{units:Array<Unit>,apple:Unit} = {units:initial,apple:new Unit(random(),random())},action: any):{units:Array<Unit>,apple:Unit}{
    switch (action.type){
        case "MOVE":
            G.pressed = false;
            state = JSON.parse(JSON.stringify(state));
            last.axisX = state.units[state.units.length-1].axisX;
            last.axisY = state.units[state.units.length-1].axisY;
            switch(action.payload.direction){
                case "U":
                    moveTail(state.units);
                    state.units[0].axisY -= Rule.step;
                    break;
                case "D":
                    moveTail(state.units);
                    state.units[0].axisY += Rule.step;
                    break;
                case "L":
                    moveTail(state.units);
                    state.units[0].axisX -= Rule.step;
                    break;
                case "R":
                    moveTail(state.units);
                    state.units[0].axisX += Rule.step;
                    break;
            }
            let apple = action.payload.apple;
            let head = state.units[0];
            if(apple.axisY === head.axisY && apple.axisX === head.axisX){
                let unit = new Unit(last.axisX,last.axisY);
                state.units.push(unit);
                state.apple = new Unit(random(),random());
            }
            console.log("MOVED!");
            break;
    }
    return state;
}

export function ControlReducer(state:string = "R",action: any):string {
    if(G.pressed){
        return state;
    }
    switch (action.type){
        case "UP":
            console.log("UP: "+action.payload);
            state = "U";
            G.pressed = true;
            break;
        case "DOWN":
            console.log("DOWN: "+action.payload);
            state = "D";
            G.pressed = true;
            break;
        case "LEFT":
            console.log("LEFT "+action.payload);
            state = "L";
            G.pressed = true;
            break;
        case "RIGHT":
            console.log("RIGHT: "+action.payload);
            state = "R";
            G.pressed = true;
            break;
    }
    return state;
}