import {Rule} from '../Rule';
import Unit from '../models/Unit';

function moveTail(arr:Array<Unit>){
    for(let i=arr.length-1;i>0;i--){
        arr[i].axisX = arr[i-1].axisX;
        arr[i].axisY = arr[i-1].axisY;
    }
}

export default function(state:Array<Unit> = [{axisX:40,axisY:0},{axisX:20,axisY:0},{axisX:0,axisY:0}],action: any){
    switch (action.type){
        case "MOVE":
            state = [...state];
            switch(action.payload){
                case "U":
                    moveTail(state);
                    state[0].axisY -= Rule.step;
                    break;
                case "D":
                    moveTail(state);
                    state[0].axisY += Rule.step;
                    break;
                case "L":
                    moveTail(state);
                    state[0].axisX -= Rule.step;
                    break;
                case "R":
                    moveTail(state);
                    state[0].axisX += Rule.step;
                    break;
            }
            console.log("MOVED!");
            break;
    }
    return state;
}