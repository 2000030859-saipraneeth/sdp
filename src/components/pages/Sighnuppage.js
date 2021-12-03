import React from 'react';
import '../../App.css'

import Footer from '../Footer';

import Login from '../login/login';
import Navbar2 from '../Navbar2';
import Register from '../register/register';



function signuppage(){
    return(
                 
             <>
             <Navbar2/>
             <Register/>
             </>
        
    );
}
export default signuppage;