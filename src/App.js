import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import {Route,BrowserRouter} from 'react-router-dom'
import NavBar from './components/Signup'
import Home from './components/screens/Home'

function App() {
 
  return (
    <BrowserRouter>
    
    <Route exact path= '/:postid'>
    <NavBar/>
    </Route>
    <Route exact path= '/home'>
    <Home/>
    </Route>
    </BrowserRouter>
  
  // <> 
  //  <h1>
  //    yes
  //  </h1>
  //  </>
  );
}

export default App;
