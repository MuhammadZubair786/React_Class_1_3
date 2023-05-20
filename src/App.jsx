import React from "react";
import Navigation from "./config/Navigation";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";
import { Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
class App extends React.Component{
  render(){
    return(
      <>
      <Header/>
      <Routes>
            <Route path="/" element={<LoginForm/>}></Route>
            <Route path="/home" element={<Home/>}></Route> 
        </Routes>
        <h1>footer</h1>
      </>
    
     
    )

    }
}

export default App