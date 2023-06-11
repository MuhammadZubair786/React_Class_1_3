import React, { useEffect, useState } from "react";
import { connect } from "react-redux";


function AllUser(props){
console.log(props)
let [chkuser,setcheckuser] = useState()


    return(
        <>
        <h1>User </h1>
        {
            
            props.mainuser.map((v,i)=>{
              return(
                <>
                <h1>{v.email}</h1>
                <h1>{v.password}</h1>
                </>

              )
            })
          }
      
        </>
    )
}

//data get
const mapStateToProps = (state) => ({
    mainuser : state.user
});


// export default AddUser;
export default connect(mapStateToProps,null)(AllUser);