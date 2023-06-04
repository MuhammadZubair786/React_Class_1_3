import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div style={{margin:"auto",textAlign:"center",marginTop:"20%"}}>
       <Link to={"/match"}>
        <button>Match List </button>
       </Link>
       <Link to={"/ranking"}>
        <button>Icc Ranking List </button>
        </Link>
        </div>

    )
}
export default Home