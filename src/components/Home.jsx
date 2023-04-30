import React from "react"
import { useLocation, useNavigate } from "react-router-dom"


let highorderfun = (Comp)=>{
    let  forwar_1 = React.forwardRef((props,ref)=>{
        let location = useLocation()
        let navigate = useNavigate()
        return <Comp { ...props } location={location} navigate={navigate} />
    })
    return forwar_1
}

class Home extends React.Component{

    
    
    render(){
        console.log(this.props.location.state)
        return(
            <>
            <h1>Home</h1>
            </>
        )
    }
}

export default  highorderfun(Home)