import React, { useState } from "react";
import { Alert, Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/Firebase";
import { ref, get } from "firebase/database";

function Login() {
  // let [email,setemail]=useState()
  // let [password,setPassword]=useState()

  let [search, setsearch] = useState();
  let [userdata, setuserdata] = useState([]);

  let [user, setuser] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    console.log(e.target.name);
    setuser((prep) => ({ ...prep, [e.target.name]: e.target.value }));
  };

  const signin = async () => {
    if (user.email == "" || user.password == "") {
      alert("enter value");
    } else {
      try {
        let userdata = await signInWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        console.log(userdata.user.uid);

        let dbref = ref(db, `user/${userdata.user.uid}`);
        await get(dbref).then((snap) => {
          console.log(snap.val());
        });

        let dbref1 = ref(db, `user`);
        await get(dbref1).then((snap) => {
          console.log(snap.val());
          let data = [];

          let getdata = Object.values(snap.val());
          getdata.map((v, i) => {
            if (v.education == "bachleor") {
              data.push(v);
            }
          });
          console.log(data);
        });
      } catch (E) {
        alert(E);
      }
    }
  };

  const searchdata = async (e) => {
    let dbref1 = ref(db, `user`);
    await get(dbref1).then((snap) => {
      console.log(snap.val());
      let data = [];

      let getdata = Object.values(snap.val());
      getdata.map((v, i) => {
        if (v.education == e.target.value) {
          data.push(v);
        }
      });
      console.log(data);
      setuserdata(data);
    });
  };

  return (
    <div style={{ width: 400, margin: "auto" }}>
      <h1>Form 1</h1>

      <br />

      <input
        value={user.email}
        required
        onChange={(e) => handlechange(e)}
        type="email"
        placeholder="enter email"
        name="email"
      />
      <br />
      <input
        value={user.password}
        required
        onChange={(e) => handlechange(e)}
        type="password"
        placeholder="enter password"
        name="password"
      />
      <br />
      <br />
      {/* <button onClick={()=>submit()} >Next</button> */}
      <Button variant="contained" color="success" onClick={() => signin()}>
        Success
      </Button>

      <input type="text" value={search} onChange={(e) => searchdata(e)} />

      {userdata.map((v, i) => {
        return(
          <h1>{v.email}</h1>
        )
      })}

      {/* <button onClick={()=>searchdata()}>seqarch</button> */}
    </div>
  );
}

export default Login;
