const add_inc =()=>{
    return(dispatch)=>{
        dispatch({
            type:"inc"
        })
    }
}

const del_inc =()=>{
    return(dispatch)=>{
        dispatch({
            type:"dec"
        })
    }
}


export {add_inc,del_inc}