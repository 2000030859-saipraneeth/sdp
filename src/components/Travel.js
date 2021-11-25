import React from 'react';
import '../App.css'
import './Travel.css';


function Travel() {
  const sec = document.querySelector(".sec");
  const min = document.querySelector(".min");
  const hr = document.querySelector(".hr");
 
  return (
    <div className='Main-container'>
      <video className='video1'  src="/videos/video5.mp4" autoPlay loop muted/>
      
    
    </div>
  );
}
export default Travel;