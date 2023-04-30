import React from "react"
import { Link, useNavigate } from "react-router-dom"

let highorderfun = (Comp)=>{
    let  forwar_1 = React.forwardRef((props,ref)=>{
        let navigate = useNavigate()
        return <Comp { ...props } navigate={navigate} />
    })
    return forwar_1

}

class Login extends React.Component{
   
    // let navigate =  useNavigate() //
   
    call_Data= ()=>{
        console.log(this.props)
        this.props.navigate("/home",
        {
            state : [
                {
                    name :"asad",
                    email : "new@gmail.com"
                },
                {
                    name :"asad123",
                    email : "new123@gmail.com"
                }
               
            ]
        }
        )
    }

    render(){
        return(
            <>
            <h1>Login</h1>
            <Link to="/home">
            go to home page
            </Link>
            <button onClick={()=>this.call_Data()}>Call data</button>
            </>
        )
    }
}

export default highorderfun(Login)