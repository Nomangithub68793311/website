import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import NavBar from './components/Signup'
import Home from './components/screens/Home'

function App() {
 
  return (
    <BrowserRouter>
    <Switch>
    <Route exact strict path= '/:postid' component={NavBar}/>
    <Route exact strict path= '/home' component={Home}/>
    </Switch>
   
    </BrowserRouter>
  
  // <> 
  //  <h1>
  //    yes
  //  </h1>
  //  </>
  );
}

export default App;
