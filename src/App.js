import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import NavBar from './components/Signup'
import Home from './components/screens/Home'
import AdminLogin from './components/screens/AdminLogin'
import AdminDataPage from './components/screens/AdminDataPage'
import Privacy from './components/screens/Privacy'

function App() {
 
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path= '/:postid' component={NavBar}/>
    {/* <Route exact path= '/:postid/:url/:user' component={NavBar}/> */}
    <Route exact strict path= '/' component={Home}/>
    <Route exact strict path= '/admin/travis' component={AdminLogin}/>
    <Route exact strict path= '/admin/dashboard' component={AdminDataPage}/>
    <Route exact strict path= '/privacy/policy' component={Privacy}/>
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
