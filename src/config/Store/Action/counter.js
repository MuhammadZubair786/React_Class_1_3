const inc_count=()=>{
    return((dispatch)=>{
        dispatch({
            type:"Inc"
        })
    })
}

const dec_count=()=>{
    return((dispatch)=>{
        dispatch({
            type:"dec"
        })
    })
}
export {inc_count,dec_count}