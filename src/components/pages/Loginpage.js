import React,{useState} from 'react';
import '../../App.css'

import Footer from '../Footer';

import Login from '../login/login';
import Navbar from '../Navbar';



function Loginpage(){
    const [ user, setLoginUser] = useState({})
    return(
                 
             <>
             <Navbar/>
             <Login setLoginUser={setLoginUser}/>
             </>
        
    );
}
export default Loginpage;