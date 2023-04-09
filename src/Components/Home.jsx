import React  from "react";
import {Link} from 'react-router-dom'

function Home(){
    return(
        <>
        <h1>Home</h1>
        <button>
            <Link to="/product" style={{textDecoration:"none"}} >
            Product List 
            </Link>
        </button>

        </>
    
    )
}

export default Home