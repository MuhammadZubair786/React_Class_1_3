import React from "react";
import { connect } from "react-redux";
import {inc_count, dec_count } from "./config/Store/Action/counter";
import AddUser from "./Components/AddUser.js";
import Alluser from "./Components/Alluser";

function App(props){
  console.log(props)
  return(
    <>
    <h1>Store value {props.count} </h1>
    <button onClick={()=>props.inc()}>+</button>
    <button onClick={()=>props.dec_data()}>-</button>
    <AddUser/>
    <Alluser/>

  


  

    </>
  )
}

const mapStateToProps=(state)=>({

  count : state.count,
  user:state.user
})

const mapdispatchtoprops=(dispatch)=>({
  inc:()=> dispatch(inc_count()),
  dec_data :()=>dispatch(dec_count())

})


// export default App
export default connect( mapStateToProps,mapdispatchtoprops)(App)