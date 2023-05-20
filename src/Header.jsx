import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
         <b>
            <Link to={"/"}>
            Form
            </Link>
            &emsp;
           </b>
           <b>
            <Link to={"/home"}>
            Home 
            </Link>
            
           </b>
        </>
      
    )
}

export default Header