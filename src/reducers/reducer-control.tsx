export default function(state:any = "R",action: any){
    switch (action.type){
        case "UP":
            console.log("UP: "+action.payload);
            state = "U";
            break;
        case "DOWN":
            console.log("DOWN: "+action.payload);
            state = "D";
            break;
        case "LEFT":
            console.log("LEFT "+action.payload);
            state = "L";
            break;
        case "RIGHT":
            console.log("RIGHT: "+action.payload);
            state = "R";
            break;
    }
    return state;
}