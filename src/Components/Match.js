import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
function Matches() {
  let [matchlist, setmatchlist] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data["response"]["items"]);
        setmatchlist(response.data["response"]["items"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Matches list</h1>
      {matchlist.map((v, i) => {
        return (
          <>
            <div style={{ border: "1px solid red", margin: "auto" }}>
              <Link to={`/match/${v.match_id}`}>
              <h1 style={{textAlign:"center"}}>Team A:{v.teama.name}
              <img src={v.teama.logo_url}
              style={{height:20+"px"}}
              />
              </h1>
              <h3 style={{textAlign:"center"}}>vs</h3>
              <h1 style={{textAlign:"center"}}>Team B:{v.teamb.name}
              <img src={v.teamb.logo_url}
               style={{height:20+"px"}}
              /></h1>
              </Link>
             

              {/* <h1>{v.match_id}</h1> */}
            </div>
          </>
        );
      })}
    </>
  );
}

export default Matches;
