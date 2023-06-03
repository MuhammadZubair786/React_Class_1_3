import React, { useEffect } from "react";
import axios from "axios";
import Navigation from "./CONFIG/navigation";

function App() {
  // useEffect(() => {

  //   let config = {
  //     method: 'get',
  //     maxBodyLength: Infinity,
  //     url: 'https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249',
  //     headers: { }
  //   };

  //   axios.request(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }, []);

  return (
    <>
      <Navigation />
    </>
  );
}
export default App;
