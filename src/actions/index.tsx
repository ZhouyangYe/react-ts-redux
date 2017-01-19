export const goUp = ()=>{
    console.log("You are trying to go UP");
    return {
        type: "UP",
        payload: "UP"
    }
}
export const goLeft = ()=>{
    console.log("You are trying to go LEFT");
    return {
        type: "LEFT",
        payload: "LEFT"
    }
}
export const goRight = ()=>{
    console.log("You are trying to go RIGHT");
    return {
        type: "RIGHT",
        payload: "RIGHT"
    }
}
export const goDown = ()=>{
    console.log("You are trying to go DOWN");
    return {
        type: "DOWN",
        payload: "DOWN"
    }
}

export const createApple = ()=>{
    console.log("Creating apple!");
    return {
        type: "CREATE_APPLE",
        payload: "Create Apple"
    }
}