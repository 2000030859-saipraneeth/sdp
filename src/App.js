import React,{useState} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Getstartedpage from './components/pages/Getstart/Getstartedpage';

import Hosppage from './components/pages/Hosppage';
import {Helmet} from 'react-helmet';
import Register from './components/register/register';
import Login from './components/login/login';
import Loginpage from './components/pages/Loginpage';
import signuppage from './components/pages/Sighnuppage';


function App() {

  const [ user, setLoginUser] = useState({})
 
 
   
 
  return (
    
    
    
    <>
    <Helmet>
      <title>
        Paryatak
      </title>
    </Helmet>
    <Router> 
    
    

<Switch>

<Route exact path='/Getstartedpage'>
            
              <Getstartedpage setLoginUser={setLoginUser} /> 
            
            </Route>

  <Route path='/' exact component=
  {Home}/>
 
   <Route path='/sign-up' exact component=
  {signuppage}/>
   <Route path='/login'>
            <Loginpage/>
          </Route>
  <Route path='/Hospitality' exact component=
  {Hosppage}/>
</Switch>


    </Router>
    
  
   
</>

    
  );
  
}

export default App;
