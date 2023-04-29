import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { redirect, useNavigate } from "react-router-dom";
import Home from "./Home";
function Login(){
   let [email,setemail ]=useState(" ")
   let navigate = useNavigate()

  
   const  submit_data =()=>{
       
        if(email== " "){
            toast.error("enter data",{
                position: "top-center",
                theme: "colored",
                autoClose: 1000,
                progress: 0,
                draggable: true,
            })
        }
        else{

            localStorage.setItem("userreg",true)
            toast.success("email is regsister",{
                position: "top-center",
                theme: "colored",
                autoClose: 1000,
                progress: 0,
                draggable: true,
            })
            navigate("/home",{replace:true})
            // console.log(useNavigate)
        }
      
    }
  
        return(
            <>
            <h1 style={{textAlign:"center"}}>Login Page</h1>

            <div>

            <input
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            style={{display:"block",margin:"auto"}} type="email" placeholder="enter email"/>

            <input style={{display:"block",margin:"auto",marginTop:"10px"}} type="text" placeholder="enter password"/>
            </div>
            <br/>
            <button onClick={()=>submit_data()} style={{display:"block",margin:"auto"}}>
                Submit
            </button>

            <ToastContainer/>


            </>
        )
    }


export default Login 