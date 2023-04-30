import React,{Component} from "react";
import { Link,useNavigate } from "react-router-dom";

//high order function use for use hook in class based componnets
const highOrderFunc = (Comp)=>{
    const forwardRes = React.forwardRef((props,ref)=>{
        const navigate = useNavigate()
       return <Comp {...props} navigate={navigate} ref={ref} />
    })
    return forwardRes
}


class Login extends Component{
    go_home =()=>{ 
        const {navigate} = this.props
         navigate("/home/3",{
            state: {
                email :"new@GMAIL.COM",
                password:123
            }
         })
    }

    render(){
        return(
            <>
             <h1>Login page</h1>
             {/* <Link to="/home">
                go to home page
             </Link> */}
             <button onClick={()=>this.go_home()}>
                Click
             </button>
            </>
           
        )
    }
}

export default highOrderFunc(Login)