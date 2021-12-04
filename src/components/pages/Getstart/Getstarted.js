import React from 'react';
import '../../../App.css'
import Carditem from '../../Carditem';
import './../../Cards.css';
import './Getstarted.css';


function Getstarted() {
  return (
    
    <div className='hero-container1'>
      
      <video className='video2'src="/videos/video5.mp4" autoPlay loop muted/>
      <h3>HI need a more info about travel</h3>
    <h3> <a href="https://festive-davinci-a6bf28.netlify.app/">Try this </a></h3>
     <div>
     
            <div className='cards__container1'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src='images/img-travel.jpg'
                    text='Travel'
                    label='Travel'
                    desc='Find best deals Train,BUS , Flight Tickets, for India & International travel. Book cheap Travel tickets
                     online for Domestic & 
                    International airlines, customized holiday packages and special deals on Tour Bookings acording to season.'
                    path='/Travel'
                    btntext='Book now'
                    className='card1'
                    />
                    <Carditem
                    src='images/img-tourism.jpg'
                    text='Tourism'
                    label='Tourism'
                    desc='Know the info about touring,accommodations,and entertaining tourists spots  & travel guide, its travel attractions like wildlife
                    , hill stations, beaches, adventure, pilgrimage and tour packages related to them.'
                    path='/Tourism'
                    btntext='Know More'
                    className='card2'
                    />
                    
                    <Carditem
                    src='images/img-hospitality.jpg'
                    text='Hospitality'
                    label='Hospitality'
                    desc='Find the best accomodations all over the country/world at your best deals included with high star amminities all over.
                    Get information for weekend trips to cities like Mumbai or Bengaluru and you can find the right hotel quickly
                    .'
                    btntext='Book now'
                    path='/Hospitality'
                    className='card1'
                    />
                    </ul>
                     
                </div>
              
           
            </div>
            
            
     </div>
     <footer/>
    </div>
  );
}
export default Getstarted;