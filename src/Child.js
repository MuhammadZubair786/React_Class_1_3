import React from "react";
import { connect } from "react-redux";

function Child(props){
    return(
        <>
        <h1>child dec : value {props.count}</h1>
        <h1>child dec : value {props.email}</h1>
        </>

    )
}

const mapStateToProps=(state)=>({
    count:state.count,
    email:state.user
  })

export default connect(mapStateToProps)(Child)