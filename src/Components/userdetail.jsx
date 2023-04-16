import React from "react";
import { useParams } from "react-router-dom";
function Userdetails(){
    let data = useParams()
    console.log(data.id1)
    return(
        <h1>user details</h1>
    )
}

export default Userdetails