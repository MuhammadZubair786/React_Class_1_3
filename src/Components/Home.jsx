import React from "react";
import { Link } from "react-router-dom";


const Home=()=>{
    return(
        <div style={{margin:"5%"}}>
        <button>
            <Link to={"/Login"}> Login</Link>
           
        </button>
        <button>
        <Link to={"/regsister"}>  Sign up</Link>
        </button>
        </div>
    )
}
export default Home;