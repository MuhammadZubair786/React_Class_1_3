import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addLocalTodostoState, addTodo, updateStatus, updateTodo } from "../config/Store/Action/Todos";

function TodoS(props) {
    // let [inp,setinp]=useState()
    // let [password,setpassword]=useState()

    //add new todo 
    let [user, setuser] = useState(
        {
            email: "",
            password: ""
        }
    )

    //edit user

    let [edituser, setedituser] = useState(
        {
            email: "",
            password: ""
        }
    )


    useEffect(() => {
        console.log(props.todos)
        props.LocalStorageData()
    }, [])

    //new data set 
    const handlechange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })

    }

    //edit set 
    const handleeditchange = (e) => {
        setedituser({ ...edituser, [e.target.name]: e.target.value })

    }


    const addTodo = () => {
        console.log(user)
        // set false
        user["status"] = false
        console.log(user)
        props.Add_Todos(user)
    }

    const editTodo = (index, value) => {
        console.log(index)
        //INDEX =>STATUS UPDATE

        setedituser({
            email: value.email,
            password: value.password
        })


        props.update_Status(index)
    }

    const updateData =(index)=>{
        console.log(index)
        console.log(edituser)
        edituser["status"]=false
        edituser["index"]=index
        props.update_todo(edituser)
    }

    const deltedata = (index) => {
        console.log(index)
    }

    return (
        <>
            <input type="text" name="email" value={user.email} onChange={(e) => handlechange(e)} />
            <input type="text" value={user.password} name="password" onChange={(e) => handlechange(e)} />

            <button onClick={() => addTodo()}>Add Todo </button>

            <br />
            {
                props.todos.length == 0 ? "No data" :
                    props.todos.map((v, i) => {
                        return (
                            <div>
                                {v.status == true ?
                                    <>
                                        <input type="text" name="email" value={edituser.email} onChange={(e) => handleeditchange(e)} />
                                        <input type="text" name="password" value={edituser.password} onChange={(e) => handleeditchange(e)} />
                                        <button onClick={() => updateData(i)} >Update</button>
                                    </>

                                    :

                                    <>
                                        <b>email : {v.email} password :{v.password}</b>
                                        <button onClick={() => deltedata(i)} >delete</button>
                                        <button onClick={() => editTodo(i, v)} >Edit</button>


                                    </>
                                }

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
    LocalStorageData: () => dispatch(addLocalTodostoState()),
    update_Status: (ind) => dispatch(updateStatus(ind)),
    update_todo:(data)=>dispatch(updateTodo(data))

})



export default connect(mapStateToProps, mapDispatchToProps)(TodoS)