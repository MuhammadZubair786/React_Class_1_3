import React,{useState} from "react";
import { Link,useNavigate  } from "react-router-dom";
function Home(){

    let [count,setcount] = useState(0)
    let [value,setvalue] = useState()
    
    let naviagte = useNavigate() //page move 
    const gopage = ()=>{
        naviagte("/Products",{ replace: true })//user back 
    }
    const inc = ()=>{
        setcount(count+1)
    }

    const btn =()=>{
        console.log(value)
    }
    return(
        <>
        <h1>Home page</h1>
        <input type="text" value={value||""}
         onChange={(e)=>setvalue(e.target.value)} />
        <button onClick={()=>btn()}>SHOW VALUE</button>
        <h1>Value {count}</h1>
        <button onClick={()=>inc()}>inc</button>
        <button onClick={()=>gopage()}>
            gO PRODUCT
        </button>
        </>
    )
}
export default Home