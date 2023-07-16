const addUser=(data)=>{
   console.log(data)
   return((dispatch)=>{
    dispatch({
        type:"AddUser",
        data:data
    })
})
}

export {addUser}

//chg