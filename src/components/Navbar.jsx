import React from "react";

class Navbar extends React.Component{

    constructor(){
        super()
    }
    
    render(){
        return(
            <h1 
            style={{
                backgroundColor:"red",
                textAlign:"center",
                color:"white"}}>
                Navbar
            </h1>

         
        )
    }
}

export default Navbar