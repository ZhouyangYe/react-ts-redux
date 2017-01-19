export default function(state:Array<any>=[],action:any){
    switch (action.type){
        case "CREATE_APPLE":
            console.log("Apple created!");
            break;
    }
    return state;
}