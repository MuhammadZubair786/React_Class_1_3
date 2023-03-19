import React from "react";
import Card from "./components/Card";


import Navbar from "./components/Navbar";
import Slider from "./components/Slider";


//function based 

// let App=()=>{
//   return(
//     <h1>Hello App</h1>
//   )
// }
// export default App

//class based components
class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
   <div>
    {/* <Navbar/>
    <Slider/> */}
    <Card/>
   

   </div>
    )
  }
}

export default App