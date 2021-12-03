import React,{useState} from 'react';
import '../../App.css'

import Footer from '../Footer';

import Login from '../login/login';
import Navbar2 from '../Navbar2';



function Loginpage(){
    const [ user, setLoginUser] = useState({})
    return(
                 
             <>
             <Navbar2/>
             <Login setLoginUser={setLoginUser}/>
             </>
        
    );
}
export default Loginpage;