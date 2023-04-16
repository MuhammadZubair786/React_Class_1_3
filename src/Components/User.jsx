import React from "react";
import { Link } from "react-router-dom";

function User() {
  const array = [
    {
      name: "Ali",
      roll_no: "123",
      contact: "0123899183",
      address: "Smit ",
      fee: true,
    },
    {
      name: "ASAD",
      roll_no: "456",
      contact: "0123899183",
      address: "tEST  ",
      fee: false,
    },
  ];
  return (
    <>
      <h1>User List </h1>
      {array.map((v, i) => {
        return (
          <li>
            {v.fee == true ? 
              <Link key={i} state={v} to={'/user/'+v.roll_no+v.name} style={{textDecoration:"none"}}>
                <i>{v.roll_no}</i>
                <b style={{ color: "green" }}>{v.name}</b>
              </Link>
             : 
              <Link  key={i}  state={v}  to={`/user/${v.roll_no}/123`} style={{textDecoration:"none"}}>
                <i>{v.roll_no} </i>
                <b style={{ color: "red" }}>{v.name}</b>
              </Link>
            }
          </li>
        );
      })}
    </>
  );
}

export default User;
