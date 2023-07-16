const AddTodos = (user)=>{
    return((dispatch)=>{
        dispatch({
            type:"Add_Todo1",
            data:user
        })
    })
}

const getLocalData = (user)=>{
    return ((dispatch)=>{
        dispatch({
            type:"get_localdata"
        })
    })
}

const updateStatus= (index)=>{
    return ((dispatch)=>{
        dispatch({
            type:"update_status",
            index:index
        })
    })
}

const updateTodo=(data)=>{
    return((dispatch)=>{
        dispatch({
            type:"update_todo",
            data:data
        })
    })

}

export {AddTodos,getLocalData,updateStatus,updateTodo}