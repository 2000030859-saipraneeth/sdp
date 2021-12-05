import React from 'react';
import '../App.css'
import { Button2 } from './Button2';
import './HeroSection.css';
import Chatbot from './chatbot';


function HeroSection() {
  const headingStyle={
    color:'blue'
  }
  return (
    <div className='hero-container'>
      <img src='images/img-1stw.jpg'/>
      
      <h1 >Paryatak<i className='fas fa-globe-asia fa-0.5x'></i></h1>
      <p>What are you waiting for?</p>
      {/* <div className='chatbot'><Chatbot/></div> */}
      
     
      <div className='hero-btns'>
        
          <Button2 className='btns' buttonStyle='btn--primary'
          buttonSize='btn--large'
          >
            
              Get Started
         

            
          </Button2>
          
                      
      </div>
     
    
    </div>
     
    
  );
}
export default HeroSection;