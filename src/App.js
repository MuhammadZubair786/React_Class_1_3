import React from "react";
import { connect } from "react-redux";
import { add_inc, del_inc } from "./config/Store/Action/increment";
import Child from "./Child";

function App(props){
  console.log(props)
  return(
    <>
    <h1>
      Store value : 
      {props.count}
    </h1>
    <Child/>
    <button onClick={()=>props.inc()}>Inc</button>
    <button onClick={()=>props.dec()}>-</button>
    </>
  )
}


//data get 
const mapStateToProps=(state)=>({
  count:state.count,
  email:state.user
})

const mapdispatchToProps=(dispatch)=>({
  inc:()=>dispatch(add_inc()),
  dec:()=>dispatch(del_inc())
})

// export default App;
export default connect(mapStateToProps,mapdispatchToProps)(App)