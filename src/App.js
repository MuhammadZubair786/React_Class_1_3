import React from "react";
import { connect } from "react-redux";
import {inc_count, dec_count } from "./config/Store/Action/increment";

function App(props){
  console.log(props)


  return(
    <>
    <h1>Store value {props.count} </h1>
    <button onClick={()=>props.inc()}>inc</button>
    <button onClick={()=>props.dec_data()}>inc</button>

    </>
  )
}

const mapStateToProps=(state)=>({

  count : state.count,
  email:state.user
})

const mapdispatchtoprops=(dispatch)=>({
  inc:()=> dispatch(inc_count()),
  dec_data :()=>dispatch(dec_count())

})


// export default App
export default connect( mapStateToProps,mapdispatchtoprops)(App)