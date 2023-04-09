import React from "react";
import { Link } from "react-router-dom";

function Product(){
    const array = [
        {
            id:"1",
            name:"ali",
            contact:"04382048024",
            address :"sjhdjhd",
        },
        {
            id:"2",
            name:"asad",
            contact:"09278482048024",
            address :"sioujie",
        }
    ]
    return(
        <>
       
        <h1>Product List </h1>
       {array.map((v,i)=>{
        return(
        <li key={i} style={{margin:20}}>
           <Link to={"/productdet"}>
           {v.name}
           </Link>
           

        </li>
        )
       })}
        </>
    )
}

export default Product