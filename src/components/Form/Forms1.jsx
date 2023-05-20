import React, { useEffect, useState } from "react";


function Form1(props){

    let [email,setemail] =useState("")
    let [Password,setPassword] =useState("")

    useEffect(()=>{

        let email = localStorage.getItem("Email")
        let Password= localStorage.getItem("Password")
        setemail(email)
        setPassword(Password)
    },[])


    const submit =()=>{
        if(email==""||Password==""){
            alert("enter all value")
        }
        else{
            localStorage.setItem("Email",email)
            localStorage.setItem("Password",Password)

            props.nextform()
        }


    }
    console.log(props)
    return(
        <>  
        <div style={{width:400,margin:"auto"}}>
        <h1>Form 1</h1>
        <form>
            <input
            value={email}
            onChange={(e)=>setemail(e.target.value)}

            type="Email" placeholder="email" />
            <br />
            <input 
             value={Password}
             onChange={(e)=>setPassword(e.target.value)}

            type="Password"  placeholder="Password" />
            <button onClick={()=>submit()}>Next</button>
        </form>
        </div>
      
        </>

    )
}

export default Form1