import React from "react";

import { Route,Routes } from "react-router-dom";
import Home from "../Components/Home";
import StepperForm from "../Components/StepperForm";
import Login from "../Components/Forms/login";
import Home2 from "../Components/Home2";

function Navigation(){
    return(
    <Routes>
    <Route path="/" element={<Home2/>}/>
    <Route path="/regsister" element={<StepperForm/>}/>
    <Route path="/Login" element={<Login/>}/>
    


    </Routes>
)}

export default Navigation