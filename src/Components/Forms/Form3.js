import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage, db } from "../../config/Firebase";
import { getDownloadURL, ref as sRef, uploadBytes } from "firebase/storage";
import { set, ref } from "firebase/database";

function Form3(props) {
  let [gender, setgender] = useState("");
  let [skill, setskill] = useState("");

  const handlegender = (e) => {
    setgender(e.target.value);
  };

  const handleupload = (e) => {
    console.log(e.target.files[0]);

    const storageref = sRef(storage, `imagesfiles/${e.target.files[0].name}`);

    uploadBytes(storageref, e.target.files[0])
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            console.log(url);
          })
          .catch((e) => {});
      })
      .catch((e) => {});
  };

  const handlesubmit = async () => {
    if (skill == "" || gender == "") {
      alert("enter value ");
    } else {
      let email = localStorage.getItem("email");
      let password = localStorage.getItem("password");
      let rollno = localStorage.getItem("rollno");
      let education = localStorage.getItem("Education");
      let g_cpg = localStorage.getItem("g_cgp");

      console.log(email, password, rollno, education, g_cpg);

      try {
        let user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user.user.uid);

        let obj = {
          email,
          password,
          rollno,
          education,
          uid: user.user.uid,
        };

        let dbref = ref(db, `user/${user.user.uid}`); //ref,path
      await  set(dbref,obj);
      alert("user add ")

      } catch (e) {
        alert(e);
      }
    }
  };

  return (
    <div style={{ width: 400, margin: "auto" }}>
      <h1>General details</h1>

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            onChange={(e) => handlegender(e)}
            value="female"
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            onChange={(e) => handlegender(e)}
            value="male"
            control={<Radio />}
            label="Male"
          />
          <FormControlLabel
            onChange={(e) => handlegender(e)}
            value="other"
            control={<Radio />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>

      <br />

      <br />

      <input
        style={{ width: "190px" }}
        type="text"
        value={skill}
        required
        onChange={(e) => setskill(e.target.value)}
        placeholder="enter skills"
      />

      <br />
      <input
        style={{ width: "190px" }}
        type="file"
        onChange={(e) => handleupload(e)}
        placeholder="enter skills"
        accept="image/*"
      />
      <br />

      <button>Back</button>

      <button onClick={() => handlesubmit()}>Submit</button>
    </div>
  );
}

export default Form3;
