import React,{Component} from "react";
import { IoIosAddCircleOutline } from 'react-icons/io';
import { AiTwotoneStar } from 'react-icons/ai';
import { FcStart } from 'react-icons/fc';


class App extends Component{
    constructor(){
        super()
        this.state={
            value:"",
            todo:[
               
            ]
        }

    }

    handlechg=(val)=>{
        this.setState({
            value:val
        })

    }

    //add 
setdata=()=>{
   

    this.setState({
        todo:[...this.state.todo, this.state.value],
        value:""
    })
    console.log(this.state.todo)
}




    render(){
        return(
            <div>
                <h1>Todo List </h1>
                <input value={this.state.value} onChange={(e)=>this.handlechg(e.target.value)} type="text" />
                <button onClick={()=>this.setdata()}>
                    <IoIosAddCircleOutline color="red"/>
                </button>
                
                {
                    this.state.todo.map((v,i)=>{
                        return(
                           
                            <li key={i} style={{listStyle:"none"}}>
                              <i><FcStart/></i>  {v}
                              <button onClick={()=>this.edit(i)}>edit</button>
                              <button>delete</button>

                            </li>
                          

                        )
                    })
                }
              
            </div>
        )
    }

}

export default App