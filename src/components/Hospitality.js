import React from 'react';
import '../App.css'
import Carditem from './Carditem';
import './cards2.css';
import Footer from './Footer';
import './Hospitality.css'
import { scards } from './smallcards';
import Navbar2 from './Navbar2'


function Hosp() {
  return (
    <div className='hero-container1'>
      
      <video className='video1' src="/videos/video5.mp4" autoPlay loop muted />
      <div>

        <div className='cards__container1'>
          <div className='cards__wrapper1'>
            <ul className='cards__items1'>


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
                path='/services'
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
            <ul className='cards__items1'>
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
            <ul className='cards__items1'>


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
                path='/services'
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
            <div>

            </div>

          </div>


        </div>


      </div>
      <Footer />
    </div>
  );
}
export default Hosp;