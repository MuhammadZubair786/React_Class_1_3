import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../config/Store/Action/user";
import { dec_count, inc_count } from "../config/Store/Action/counter";

function AddUser(props) {
   console.log(props)
  let [user, setuser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = () => {
    console.log(user);
    props.add_User(user)
  };

  return (
    <div style={{ margin: "auto", width: "500px", marginLeft: "40%" }}>
      <h1>Add User</h1>

      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="button"
        value={"Submit"}
        style={{ marginLeft: "8%" }}
        onClick={submit}
      />
      <br/>
    
    </div>
  );
}

//data get
const mapStateToProps = (state) => ({
    mainuser : state.user
});

//value chg
const mapdispatchtoprops=(dispatch)=>({
   add_User : (data)=>dispatch(addUser(data)) //call
  
  })
// export default AddUser;
export default connect(mapStateToProps,mapdispatchtoprops)(AddUser);
