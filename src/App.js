import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Getstartedpage from './components/pages/Getstart/Getstartedpage';
import Form from './components/Form';
import Form2 from './components/pages/Login/Form2';
import Travel from './components/Travel';
import {Helmet} from 'react-helmet';
import Loginpage from './components/pages/Login/Loginpage';
import Sighnuppages from './components/pages/Sighnuppages';


function App() {
 
 
   
 
  return (
    
    
    
    <>
    <Helmet>
      <title>
        Paryatak
      </title>
    </Helmet>
    <Router> 
    
    <Navbar/>

<Switch>


  <Route path='/' exact component=
  {Home}/>
  <Route path='/Getstartedpage' exact component=
  {Getstartedpage}/>
   <Route path='/sign-up' exact component=
  {Sighnuppages}/>
  <Route path='/Login' exact component=
  {Loginpage}/>
  <Route path='/Travel' exact component=
  {Travel}/>
</Switch>


    </Router>
    
  
   
</>

    
  );
  
}

export default App;
