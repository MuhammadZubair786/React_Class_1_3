import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "../Components/Home";
import StepperForm from "../Components/StepperForm";
import Login from "../Components/Login";

function Navigation(){
    return(
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/regsister" element={<StepperForm/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

    </Routes>
)
}


export default Navigation