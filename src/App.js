
// import React from "react";
// // import LineChart from "./Components/LineChart";
// // import MultiLineChart from "./Components/MultiLine";
// // import BarChart from "./Components/BarChart";

// function App(){
//   return(
//     <>
//     <h1>Hello World</h1>
//     {/* <LineChart/>
//     <MultiLineChart/>
//     <BarChart/> */}
//     <br/>
//     <br/>

//     </>
//   )
// }

// export default App

import React  from "react";

import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home";
import Product from "./Components/Product";
import Detail from "./Components/Product_Detail";



function App(){
  return(
    <>
    <Routes>
      {/* path ,components */}
      <Route path="/" element={<Home/>}></Route> 
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/productdet" element={<Detail/>}></Route>
    </Routes>
    
    </>
  )
}

export default App




