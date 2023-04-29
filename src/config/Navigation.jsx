import React from "react";
import { Routes,Route } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
class Navigation extends  React.Component{
    render(){

    return(
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}>
            </Route>
            
        </Routes>

    )
   }
}
export default Navigation