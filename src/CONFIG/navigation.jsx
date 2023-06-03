import React from "react";
import { Routes,Route } from "react-router-dom";
import Matches from "../Components/Match";
import MatchDetails from "../Components/MatchDetails";

function Navigation(){
    return(
        <Routes>
            <Route path="/" element={<Matches/>}></Route>
            <Route path="/match/:id" element={<MatchDetails/>}></Route>
        
        </Routes>
    )
}

export default Navigation