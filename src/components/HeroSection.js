import React from 'react';
import '../App.css'
import { Button } from './Button';
import { Button2 } from './Button2';
import Carditem from './Carditem';
import './HeroSection.css';
import { Link } from 'react-router-dom'
import Form from './Form';


 function HeroSection() {
  const headingStyle={
    color:'blue'
  }
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted/>
      
      <h1 >Paryatak<i className='fas fa-globe-asia fa-0.5x'></i></h1>
      <p>What are you waiting for?</p>
     
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