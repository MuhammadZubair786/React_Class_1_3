import React, { useState } from "react";


function Form2(props){

    let [email,setemail] =useState("")
    let [Password,setPassword] =useState("")

   
    console.log(props)
    return(
        <>  
        <div style={{width:400,margin:"auto"}}>
        <h1>Form 1</h1>
        <form>
            <input
           
            type="Email" placeholder="email" />
            <br />
            <button onClick={()=>props.Backform()}>Back</button>
           
            <button onClick={()=>props.nextform()}>Next</button>
        </form>
        </div>
      
        </>

    )
}

export default Form2