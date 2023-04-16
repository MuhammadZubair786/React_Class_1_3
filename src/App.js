import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Products";
import ProductDeatils from "./Components/ProductDetails";
import User from "./Components/User";
import Userdetails from "./Components/userdetail";

function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Product/>}></Route>
      <Route path="/productdetail" element={<ProductDeatils/>}></Route>
   
      <Route path="/user" element={<User/>}/>
      <Route path="/user/:id/:id" element={<Userdetails/>}/>
      
      <Route path="*" element={<h1>404 PAGE NOT FOUND </h1>}/>
    </Routes>
  )
}
export default App