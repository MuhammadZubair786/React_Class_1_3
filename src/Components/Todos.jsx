import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { AddTodos, getLocalData, updateStatus, updateTodo } from "../config/Store/Action/Todos";


const Todos = (props) => {
    let [user, setuser] = useState("")
    let [status, setstatus] = useState(false)

    let [editname,setediteditname]=useState("")

    useEffect(() => {
        // console.log("hello")
        props.get_todo()
    }, [])


    const edittodo=(index,value)=>{
        console.log(index)
        setediteditname(value.name)
        props.update_status(index)
    }


    const handleSubmit = () => {
        console.log(user)
        var obj ={
            name:user,
            status:false
        }
        props.add_todo(obj)
        setuser("")
    }

    const updatedata = (index)=>{
        console.log(index)
        console.log(editname)
        var obj ={
            name:editname,
            index:index
        }
        props.updateTodo(obj)
    }

    return (
        <>
            <input type="text" value={user||""} onChange={(e) => setuser(e.target.value)} />
            {
                user.toString().length > 0
                    ?
                    <button onClick={() => handleSubmit()}>Add Todos</button>
                    :
                    <button onClick={() => handleSubmit()} disabled>Add Todos</button>

            }

            {
                props.todo.map((v, i) => {
                    return (
                        <div key={i}>
                            {
                                v.status == true ?
                                    <>
                                        <input type="text"  value={editname || ""} onChange={(e)=>setediteditname(e.target.value)} />
                                        <button onClick={()=>updatedata(i)}>update</button>

                                    </>
                                    :
                                    <>

                                        <b >{v.name}</b>
                                        <button onClick={()=>edittodo(i,v)}>edit</button>
                                        <button>Delete</button>
                                    </>

                            }



                        </div>

                    )
                })
            }
        </>
    )
}

//value
const mapStateToProps = (state) => ({
    todo: state.todos
})

//function
const mapdispatchToprops = (dispatch) => ({
    add_todo: (user) => dispatch(AddTodos(user)),
    get_todo: () => dispatch(getLocalData()),
    update_status:(index)=>dispatch(updateStatus(index)),
    updateTodo:(data)=>dispatch(updateTodo(data))
})

// export default Todos
export default connect(mapStateToProps, mapdispatchToprops)(Todos)