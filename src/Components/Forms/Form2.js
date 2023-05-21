import React, { useState } from "react";

function Form2(props) {

  let [chg, setchg] = useState("master");
  let [education, seteducation] = useState("");
  let [g_cgp, setg_cgp] = useState();

  const handleChange = (e) => {
    seteducation(e.target.value);
    setchg(e.target.value);
  };

  const nextform =()=>{
    console.log(g_cgp)
    console.log(education)
    if(education==undefined ||g_cgp==undefined){
        alert("enter all data")
    }
    else{
        localStorage.setItem("Education",education)
        localStorage.setItem("g_cgp",g_cgp)
        props.handlechg()

    }
  }

  return (
    <div style={{ width: 400, margin: "auto" }}>
      <h1>Education details</h1>
      <select style={{ width: "200px" }} onChange={(e) => handleChange(e)}>
        <option selected disabled>
          select education
        </option>
        <option value={"master"}> Master</option>
        <option value={"bachleor"}> Bachleor</option>
        <option value={"matric"}> Matric</option>
        <option value={"Intermediate"}>Intermediate</option>
      </select>
      <br />
      {chg == "master" || chg == "bachleor" ? (
        <input
          style={{ width: "190px" }}
          type="text"
          placeholder="enter cgpa"
          value={g_cgp}
          onChange={(e) => setg_cgp(e.target.value)}
        />
      ) : chg == "matric" || chg == "Intermediate" ? (
        <input
          style={{ width: "190px" }}
          type="text"
          value={g_cgp}
          onChange={(e) => setg_cgp(e.target.value)}
          placeholder="enter Grade"
        />
      ) : null}

      <br />
      <button onClick={() => props.handleback()}>Back</button>

      <button onClick={() => nextform()}>Next</button>
    </div>
  );
}

export default Form2;
