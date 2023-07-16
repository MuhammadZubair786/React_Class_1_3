import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addLocalTodostoState, addTodo } from "../config/Store/Action/Todos";

function TodoS(props) {
    // let [inp,setinp]=useState()
    // let [password,setpassword]=useState()

    let [user, setuser] = useState(
        {
            email: "",
            password: ""
        }
    )
    useEffect(()=>{
        console.log(props.todos)
        props.LocalStorageData()
    },[])

    const handlechange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })

    }


    const addTodo = () => {
        console.log(user)
        props.Add_Todos(user)
    }

    const deltedata=(index)=>{
console.log(index)
    }

    return (
        <>
            <input type="text" name="email" value={user.email} onChange={(e) => handlechange(e)} />
            <input type="text" value={user.password} name="password" onChange={(e) => handlechange(e)} />

            <button onClick={() => addTodo()}>Add Todo </button>

            <br />
            {
                props.todos.length == 0  ? "No data": 
                props.todos.map((v,i)=>{
                    return (
                        <div>
                        <b>{v.email}</b>
                        <button onClick={()=>deltedata(i)} >delete</button>
                        </div>

                    )
                })
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    Add_Todos: (data) => dispatch(addTodo(data)),
    LocalStorageData : ()=>dispatch(addLocalTodostoState())

})



export default connect(mapStateToProps, mapDispatchToProps)(TodoS)