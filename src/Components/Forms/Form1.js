import React, { useEffect, useState } from "react";
import { auth } from "../../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button } from "@mui/material";
import { ref, get } from "firebase/database";
import { db } from "../../config/Firebase";
function Form1(props) {
  let [email, setemail] = useState("");
  let [Password, setPassword] = useState("");
  let [number, setnumber] = useState();

  useEffect(() => {
    let useremail = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    let rollno = localStorage.getItem("rollno");

    setemail(useremail);
    setPassword(password);
    setnumber(rollno);
  }, []);

  const submit = async () => {
    if (email == "" || Password == "" || number == "") {
      alert("Enter Email , Password & number");
    } else {
      let dbrf = ref(db, "user");
      let chk = false; //chk email
      get(dbrf).then((snap) => {
        console.log(snap.val());
        if (snap.val() != null) {
          let data = Object.values(snap.val());
          // console.log(data)
          data.map((v, i) => {
            console.log(v.email);
            if (email == v.email) {
              chk = true;
            }
          });

          if (chk == true) {
            alert("already reg ");
          } else {
            localStorage.setItem("email", email);
            localStorage.setItem("password", Password);
            localStorage.setItem("rollno", number);
            props.handlechg();
          }
        }
        else{
          localStorage.setItem("email", email);
          localStorage.setItem("password", Password);
          localStorage.setItem("rollno", number);
          props.handlechg();
        }
      });

      // let getdata = get(dbrf,(val)=>{
      //   console.log(val)
      // })

      //db serarch

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
      <Button variant="contained" onClick={() => submit()} color="success">
        Success
      </Button>
    </div>
  );
}

export default Form1;
