import React from 'react';
import './Hotels.css'
import Footer from '../Footer';

function senohouse() {
  return (
    <div className='hmain-container'>
      
      
      <img  className="hospimg" src='images/img-h6.jpg'/>
      
     <div className='hmain1-container'> 
      <h1>Senohouse</h1>
      <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i></p>
      <div className='desc'>
      Senohouse Hotels is one of the most luxurious & prominent hotels in sairat. It is located at 
        a very prime location in sairat. The hotel is just 3 km away from Mall Road, therefore; it will 
        barely take 5 minutes by vehicle to reach. The accommodations are very comfortable and cosy. 
        In addition,
         we highly value our guests’ privacy that’s why we have designed the hotel rooms accordingly. 
         You can glance
          at beautiful views from the room to enjoy the beauty of sairat. Moreover, there is enough space 
          in the balconies
           and lawn that you can enjoy your evenings, nights or entire day with your special ones. We also have an amazing 
           dining room where we serve mouth-watering dishes 
        of different cuisines. At Senohouse, we intend to make each of our guest’s stay the best.</div></div>
     <div className='det'>
       Place :Sairat<br/>
       contact :040-20209876<br/>
       price :36000/- per day<br/>

     </div>
     
      </div>
      
      
    
  );
}

export default senohouse;
