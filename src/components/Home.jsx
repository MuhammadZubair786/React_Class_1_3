

import React,{Component} from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";


//high order function use for use hook in class based componnets
const highOrderFunc = (Comp)=>{
    const forwardRes = React.forwardRef((props,ref)=>{
        const location = useLocation()
        const par = useParams()
        const nav= useNavigate()
       return <Comp {...props} nav={nav} par={par} location={location} ref={ref} />
    })
    return forwardRes
}

class Home extends Component{

    getdata=()=>{
        console.log(this.props.location.state)
        console.log(this.props.par)
        this.props.nav("/")
    
    }
    render(){
        return(
            <>
             <h1>Home page</h1>
             <button onClick={()=>this.getdata()}>data </button>
           
            </>
           
        )
    }
}

export default highOrderFunc(Home)