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
import vistara from './components/Hotels/vistara';
import vydehi from './components/Hotels/vydehi';
import Taramani from './components/Hotels/Taramani';
import senohouse from './components/Hotels/senohouse';
import pepark from './components/Hotels/pepark';
import Mariya from './components/Hotels/Mariya';
import kartav from './components/Hotels/kartav';
import janimansion from './components/Hotels/janimansion';
import kanika from './components/Hotels/kanika';
import Hosppayment from './components/Hosppayment';


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
  <Route path='/vistara' exact component=
  {vistara}/>
   <Route path='/vydehi' exact component=
  {vydehi}/>
   <Route path='/Taramani' exact component=
  {Taramani}/>
   <Route path='/senohouse' exact component=
  {senohouse}/>
   <Route path='/pepark' exact component=
  {pepark}/>
   <Route path='/Mariya' exact component=
  {Mariya}/>
   <Route path='/kartav' exact component=
  {kartav}/>
   <Route path='/kanika' exact component=
  {kanika}/>
   <Route path='/janimansion' exact component=
  {janimansion}/>
   <Route path='/Hospitality' exact component=
  {Hosppage}/>
   <Route path='/Tourism' exact component=
  {Hosppayment}/>

</Switch>


    </Router>
    
  
   
</>

    
  );
  
}

export default App;
