import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

function MatchDetails(){
    let {id} = useParams()
    console.log(id)

    let [matchinfo,setmatchinfo]=useState([])

    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://rest.entitysport.com/v2/matches/${id}/info?token=ec471071441bb2ac538a0ff901abd249`,
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
           console.log(response.data.response)
           setmatchinfo([response.data.response])

          })
          .catch((error) => {
            console.log(error);
          });
    },[])
    return(
        <>
        
        <h1>Match Details</h1>
        {
         matchinfo.length==0 ?
         <b>Loading...</b>:
         <div style={{ border: "1px solid red", margin: "auto" }}>
            <h1>{matchinfo[0]["title"]}</h1>
            <h1>Toss : {matchinfo[0]["toss"]["text"]}</h1>

            <h2>stadium : {matchinfo[0]["venue"]["name"]} 
        &emsp;Country : {matchinfo[0]["venue"]["country"]}
            </h2>
            <h1>Result : {matchinfo[0]["result"]}</h1>

            <h1></h1>

        
            
         </div>   
        }
        </>

    )
}
export default MatchDetails