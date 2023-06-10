const inc_count=(dispatch)=>{
    return((dispatch)=>{
        dispatch({
            type:"Inc"
        })
    })
}

const dec_count=(dispatch)=>{
    return((dispatch)=>{
        dispatch({
            type:"dec"
        })
    })
}
export {inc_count,dec_count}