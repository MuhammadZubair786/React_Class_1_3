import React from "react";
import { useLocation } from "react-router-dom";
function ProductDeatils() {
  let getdata = useLocation();
  console.log(getdata.state);

  return (
    <>
      <h1>Product DEtails</h1>
      {getdata.state.fee == true ? <b>Submit</b> : <b>not submit</b>}

      <b>Name : {getdata.state.name}</b>
      <br />
      <b>address: {getdata.state.address}</b>
      <br />

      <b>contact: {getdata.state.contact}</b>
    </>
  );
}

export default ProductDeatils;
