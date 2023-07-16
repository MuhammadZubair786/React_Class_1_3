const addUser=(data)=>{
   console.log(data)
   return((dispatch)=>{
    dispatch({
        type:"AddUser",
        data:data
    })
})
}

const editUserd=()=>{
    return((dispatch)=>{
        dispatch({
            type:"editUser",
            data:data
        }) 
    })
}

export {addUser,editUserd}

//chg