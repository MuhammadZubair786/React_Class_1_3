import React from "react";
import { Routes,Route } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import LoginForm from "../components/LoginForm";

class Navigation extends  React.Component{
    render(){

    return(

        <Routes>
            <Route path="/" element={<LoginForm/>}></Route>
            <Route path="/home/:id" element={<Home/>}></Route>
            
        </Routes>

    )
   }
}
export default Navigation