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

const updateStatus =(ind)=>{
    return((dispatch)=>{
        dispatch({
            type:"update_status",
            index:ind
        })
    })
}

const updateTodo = (data)=>{
    return((dispatch)=>{
        dispatch({
            type:"update_todo",
            data:data
        })
    })

}

export {addTodo,addLocalTodostoState,updateStatus,updateTodo}