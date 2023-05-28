import React,{useState} from "react";
import { Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../config/Firebase'

function Login(){
    // let [email,setemail]= useState()
    // let [password,set]= useState()

    let [user,setuser]=useState({
        email:"",
        password:"",
        rollno:"",
        contact:"",
        country :""
    })

    const submit=()=>{
        console.log(user.email)
        console.log(user.password)

        let user1 = signInWithEmailAndPassword(auth,user.email,user.password)
        .then((userdata)=>{
            console.log(userdata.user.uid)
        })
        .catch((e)=>{
            alert(e.code)
        })
    }


    const handlechange=(e)=>{
        console.log(e.target.name)
        setuser(user1 => ({...user1, [e.target.name]: e.target.value}))
    }

    return(
        <div style={{ width: 400, margin: "auto" }}>
        <h1>Login</h1>
  
      
        <br />
        {/* <select name="country" onChange={(e)=>handlechange(e)}>
            <option value={"pak"}>pak</option>
            <option value={"india"}>india</option>
        </select> */}
  
        <input
          value={user.email}
          required
          onChange={(e) => handlechange(e)}
          type="email"
          placeholder="enter email"
          name="email" //help 
        />
        <br />
        <input
          value={user.password}
          required
          onChange={(e) => handlechange(e)}
          name="password"
          type="password"
          placeholder="enter password"
        />

{/* <input
          value={user.rollno}
          required
          onChange={(e) => handlechange(e)}
          name="rollno"
          type="password"
          placeholder="enter password"
        /> */}
        <br />
        <br />
        {/* <button onClick={()=>submit()} >Next</button> */}
        <Button variant="contained" color="success" onClick={()=>submit()} >
          Success
        </Button>
      </div>
    )
}

export default Login