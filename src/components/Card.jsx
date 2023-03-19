import React from "react"

class Card extends React.Component{
    constructor(){
        super()
        this.state={
            counter : 0,
            val : ""
        }
    }

    call_fun=()=>{
        // alert("ok")
        // this.setState({
        //     counter : "smit"
        // })
        this.setState({
            counter : this.state.counter+1
        })  }

        reset_func=()=>{
            this.setState({
                counter:0
            })
        }

        dec_func = ()=>{
            
            this.setState({
                counter:this.state.counter-1
            })
        }
    render(){
        return(
            <div style={{textAlign:"center"}}>
            <h1>{this.state.counter}</h1><br />
            <button onClick={()=>this.call_fun()}>Increment</button>
            <button onClick={()=>this.reset_func()}>Reset</button>
            {
            this.state.counter!=0 ? 
            <>
            <button onClick={()=>this.dec_func()}>Decrement</button>
            <b>value is not zero</b>
            </>
            :
            <button style={{display:"none"}}>Decrement</button>

            }
            <br/>
            <br/>
            
            <input type="text"  onChange={(e)=>console.log(e.target.value)} />

            </div>


        )
    }

}

export default Card