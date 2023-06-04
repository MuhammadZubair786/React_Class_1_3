import React, { useState } from "react";
import axios from "axios";

function ICC_Ranking() {
  let [rank, setrank] = useState();
  let [format, setformat] = useState("odis");

  let [call,setcall]=useState(false)

  let [odis, setodis] = useState([]);
  let [t20, sett20] = useState([]);
  let [tests, settests] = useState([]);

  const Apidata = () => {
    setcall(true)
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://rest.entitysport.com/v2/iccranks?token=ec471071441bb2ac538a0ff901abd249",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data["response"]["ranks"][rank][format]);
        // let data = response.data["response"]["ranks"][rank];
        let data =response.data["response"]["ranks"][rank][format];

        setodis(data);
        // sett20(data["t20s"])
        // settests(data["tests"])
        setcall(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ margin: "auto", textAlign: "center", marginTop: "5%" }}>
      <h1>Icc Ranking</h1>
      <select onChange={(e) => setrank(e.target.value)}>
        <option selected disabled>
          Select Rank
        </option>

        <option value={"batsmen"}>batsmen</option>
        <option value={"bowlers"}>bowlers</option>
        <option value={"all-rounders"}>all-rounders</option>
        <option value={"teams"}>teams</option>
      </select>

      <select onChange={(e) => setformat(e.target.value)}>
        <option selected disabled>
          Select Format
        </option>

        <option value={"odis"}>odis</option>
        <option value={"tests"}>tests</option>
     
        <option value={"t20s"}>t20s</option>
      </select>
      <button onClick={() => Apidata()}>submit</button>

   

      {
        odis.map((v,i)=>{
           return( 
           i==0 ?
           <>
           <h1>{format} Ranking</h1>
            <div style={{border:"1px solid red",width:"40%",margin:"auto"}}>
                <h1>{v.player}</h1>
                <h2>{v.team}</h2>
                <h5>{v.pid}</h5>
            </div>
           </>:

           <div style={{border:"1px solid red",width:"40%",margin:"auto"}}>
                <h1>{v.player}</h1>
                <h2>{v.team}</h2>
                <h5>{v.pid}</h5>
            </div>
           )
        })
      }
       {/* {
        t20.map((v,i)=>{
           return( 
           i==0 ?
           <>
           <h1>t20 Ranking</h1>
            <div style={{border:"1px solid red",width:"40%",margin:"auto"}}>
                <h1>{v.player}</h1>
                <h2>{v.team}</h2>
            </div>
           </>:

           <div style={{border:"1px solid red",width:"40%",margin:"auto"}}>
                <h1>{v.player}</h1>
                <h2>{v.team}</h2>
            </div>
           )
        })

        
      }
       {
        tests.map((v,i)=>{
           return( 
           i==0 ?
           <>
           <h1>Testing Ranking</h1>
            <div style={{border:"1px solid red",width:"40%",margin:"auto"}}>
                <h1>{v.player}</h1>
                <h2>{v.team}</h2>
            </div>
           </>:

           <div style={{border:"1px solid red",width:"40%",margin:"auto"}}>
                <h1>{v.player}</h1>
                <h2>{v.team}</h2>
            </div>
           )
        })
    } */}

{
        call ?
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"/>
        :
        null
      }

    </div>
  );
}
export default ICC_Ranking;
