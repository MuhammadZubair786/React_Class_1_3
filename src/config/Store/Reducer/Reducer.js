
const initalState={
    count : 20 ,
    user:[{
        email:"sajhdjasd"
    }]
}

export default (state=initalState,action)=>{
    
    switch(action.type){
        case "Inc":
            return {
                ...state,count:state.count+1
            }
            case "dec":
                return {
                    ...state,count:state.count-1
                }
           
        default:
            return state
        }

}