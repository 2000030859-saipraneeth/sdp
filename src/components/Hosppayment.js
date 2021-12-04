import React from 'react';
import '../components/Hosppayment.css'
import Navbar2 from './Navbar2';



function Hosppayment() {
  return (
   <div className="paymentgway">
     <Navbar2/>
     
      <img className='pwayg'src='images/img-paymentb.jfif' autoPlay loop muted/>
    
      
     
    
          <div className='desc1'>
          <h1>You are almost done !</h1>
          <img className="Barcode"src='images/img-pay.jpg'/>
          
          <i  class="far fa-credit-card"></i>
          <i  class="fas fa-wallet"></i>
     </div>
     <div className='desc2'>

     </div>
    
     
     </div>
    
    
     
      
      
    
  );
}

export default Hosppayment;
