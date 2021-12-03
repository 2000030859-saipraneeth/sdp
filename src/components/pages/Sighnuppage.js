import React from 'react';
import '../../App.css'

import Footer from '../Footer';

import Login from '../login/login';
import Navbar from '../Navbar';
import Register from '../register/register';



function signuppage(){
    return(
                 
             <>
             <Navbar/>
             <Register/>
             </>
        
    );
}
export default signuppage;