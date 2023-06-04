import React from "react";
import { Routes,Route } from "react-router-dom";
import Matches from "../Components/Match";
import MatchDetails from "../Components/MatchDetails";
import Home from "../Components/Home";
import ICC_Ranking from "../Components/Icc_Ranking";

function Navigation(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/ranking" element={<ICC_Ranking/>}></Route>

            <Route path="/match" element={<Matches/>}></Route>
            <Route path="/match/:id" element={<MatchDetails/>}></Route>
        
        </Routes>
    )
}

export default Navigation