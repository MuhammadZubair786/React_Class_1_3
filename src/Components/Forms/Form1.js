import React, { useEffect, useState } from "react";
import { auth } from "../../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button } from "@mui/material";

import { db } from "../../config/Firebase";
import { get, ref } from "firebase/database";

function Form1(props) {
  let [email, setemail] = useState("");
  let [Password, setPassword] = useState("");
  let [number, setnumber] = useState();

  let [player,setplayer]=useState([])

  useEffect(() => {
    let useremail = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    let rollno = localStorage.getItem("rollno");



    setemail(useremail);
    setPassword(password);
    setnumber(rollno);
  }, []);

  // let [user,setuser]=useState({
  //     email:"",
  //     Password:"",
  //     number:""
  // })

  // user.email ="ndjhd"

  const sub1 = () => {
    fetch(
      "https://rest.entitysport.com/v2/iccranks?token=ec471071441bb2ac538a0ff901abd249"
    )
      .then(
        (resp) => resp.json() // this returns a promise
      )
      .then((repos) => {
        console.log(repos.response.ranks.batsmen.odis[0]
          );
          setplayer(repos.response.ranks.batsmen.odis)
      })
      .catch((ex) => {
        console.error(ex);
      });
  };

  const submit = async () => {
    if (email == "" || Password == "" || number == "") {
      alert("Enter Email , Password & number");
    } else {
      let dbref = ref(db, "user");
      get(dbref)
        .then((snapshot) => {
          console.log(snapshot.val());
          let data = Object.values(snapshot.val());
          console.log(data);
          let chk = false;
          data.map((v, i) => {
            console.log(v.email);
            if (v.email == email) {
              chk = true;
            }
          });

          if (chk == true) {
            alert("already reg");
          } else {
            localStorage.setItem("email", email);
            localStorage.setItem("password", Password);
            localStorage.setItem("rollno", number);
            props.handlechg();
          }
        })
        .catch((e) => {
          alert(e);
        });

      // try{
      //     let user = await  createUserWithEmailAndPassword(auth,email,Password)
      //     console.log(user.user.uid)
      // props.handlechg();

      // }
      // catch(err){
      //     alert(err)

      // }
    }
  };

  return (
    <div style={{ width: 400, margin: "auto" }}>
      <h1>Form 1</h1>

      {player.map((v,i)=>{
        return(<><h1>{v.player}</h1>
      <b>{v.team}</b>
      </> 
      )})}

      <input
        value={number}
        onChange={(e) => setnumber(e.target.value)}
        required
        type="number"
        placeholder="enter roll number"
      />
      <br />

      <input
        value={email}
        required
        onChange={(e) => setemail(e.target.value)}
        type="email"
        placeholder="enter email"
      />
      <br />
      <input
        value={Password}
        required
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="enter password"
      />
      <br />
      <br />
      {/* <button onClick={()=>submit()} >Next</button> */}
      <Button variant="contained" onClick={() => sub1()} color="success">
        Success
      </Button>
    </div>
  );
}

export default Form1;
