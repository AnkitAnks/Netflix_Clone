import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() { 
  return (
  
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Switch>
      
      <Route excat path="/Login" component={Login}/>
      <Route excat path="/" component={Home}/>
     
      
    </Switch>
    
    </div>
    </BrowserRouter>
  )
}

export default App;
