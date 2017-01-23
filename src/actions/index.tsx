import Unit from '../models/Unit';

export const goUp = ():{}=>{
    console.log("You are trying to go UP");
    return {
        type: "UP",
        payload: "UP"
    }
};
export const goLeft = ():{}=>{
    console.log("You are trying to go LEFT");
    return {
        type: "LEFT",
        payload: "LEFT"
    }
};
export const goRight = ():{}=>{
    console.log("You are trying to go RIGHT");
    return {
        type: "RIGHT",
        payload: "RIGHT"
    }
};
export const goDown = ():{}=>{
    console.log("You are trying to go DOWN");
    return {
        type: "DOWN",
        payload: "DOWN"
    }
};

export const move = (data:{direction:string,apple:Unit}):{}=>{
    console.log("Moving "+data.direction);
    return {
        type: "MOVE",
        payload: data
    }
};