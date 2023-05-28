import React from "react";
import {Link} from 'react-router-dom'

function Home(){
    return(
<center>
    <h1>Ecom app</h1>
    <Link to={"/regsister"}>
    <button>Sign up </button>
    </Link>
    <Link to={"/login"}>
    <button>Login </button>
    </Link>

    </center>
    )
}

export default Home