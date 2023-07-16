const addTodo = (data)=>{
    return((dispatch)=>{
        dispatch({
            type:"addTodo",
            data : data
        })
    })

}

const addLocalTodostoState = ()=>{
    return((dispatch)=>{
        dispatch({
            type:"localdata",
           
        })
    })
} 

export {addTodo,addLocalTodostoState}