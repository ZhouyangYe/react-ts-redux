export default function(state:any,action:any){
    switch (action.type){
        case "CREATE_APPLE":
            console.log("Apple created!");
            break;
    }
    return 0;
}