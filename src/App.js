import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Getstarted from './components/Getstarted'
import Form from './components/Form';
import Form2 from './components/Form2';
import Travel from './components/Travel';
import {Helmet} from 'react-helmet';


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
  <Route path='/Getstarted' exact component=
  {Getstarted}/>
   <Route path='/sign-up' exact component=
  {Form}/>
  <Route path='/Login' exact component=
  {Form2}/>
  <Route path='/Getstarted/Travel' exact component=
  {Travel}/>
</Switch>


    </Router>
    
  
   
</>

    
  );
  
}

export default App;
