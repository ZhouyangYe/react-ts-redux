export default function(state:Array<any> = [],action: any){
    switch (action.type){
        case "UP":
            console.log("Go up!");
            break;
        case "DOWN":
            console.log("Go down!");
            break;
        case "LEFT":
            console.log("Go left!");
            break;
        case "RIGHT":
            console.log("Go right!");
            break;
    }
    return state;
}