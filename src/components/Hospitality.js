import React from 'react';
import '../App.css'
import Carditem from './Carditem';
import './Cards.css';
import Footer from './Footer';
import './Hospitality.css'
import { scards } from './smallcards';
import Navbar2 from './Navbar2'


function Hosp() {
  return (
    <div className='hero-container1'>
      
      <video className='video1' src="/videos/video-8.mp4" autoPlay loop muted />
     
      <div>
      

        <div className='cards__container1'>
          <div className='cards__wrapper1'>
            <ul className='cards__items1'>

            <h1>Explore worlds Top Hotels   |</h1>
              <Carditem
                src='images/img-h1.jpg'
                text='Vistara'
                label='Vistara'
                desc='The Caravela Beach Resort is an independent ‘5-Star Deluxe’ beach resort comprising of 201 rooms, 
                several of which have direct sea-views. (The Resort was previously
                   affiliated with Renaissance Hotels for several years). '
                path='/vistara'
                btntext='₹5000/-'
                className='card1'
              />
              <Carditem
                src='images/img-h2.jfif'
                text='Kanika'
                label='Kanika'
                desc='Beautiful & breathtaking at the Apricus Sea Breeze Max Resort & Spa. We are open to welcome our guests. 
                Experience a luxurious stay at Varca South Goa.
                 116 room property with deluxe and executive room nearly 1.2 kms from famous fatrade beach of south Goa.'
                path='/kanika'
                btntext='₹4000/-'
                className='card2'
              />

              <Carditem

                src='images/img-h3.jfif'
                text='Taramani'
                label='Taramani'
                desc='Beautiful & breathtaking at the Apricus Sea Breeze Max Resort & Spa.
                 We are open to welcome our guests. Experience a luxurious stay at Varca South Goa. 
                116 room property with deluxe and executive room nearly 1.2 kms from famous fatrade beach of south Goa.'
                btntext='₹4500/-'
                path='/Taramani'
                className='card1'
              />
            </ul>
            <ul className='cards__items1'>
            <h1>Explore Top deals    |</h1>
              <Carditem

                src='images/img-h4.jpg'
                text='Pepark'
                label='Pepark'
                desc='The Caravela Beach Resort is an independent ‘5-Star Deluxe’ beach resort comprising of 201 rooms, 
                several of which have direct sea-views. (The Resort was previously
                   affiliated with Renaissance Hotels for several years). '
                btntext='25% off'
                path='/pepark'
                className='card1'
              />
              <Carditem

                src='images/img-h5.png'
                text='Janimansion'
                label='Janimansion'
                desc='Find the best accomodations all over the country/world at your best deals included with high star amminities all over.
Get information for weekend trips to cities like Mumbai or Bengaluru and you can find the right hotel quickly
.'
                btntext='20% off'
                path='/janimansion'
                className='card1'
              />
              <Carditem

                src='images/img-h6.jpg'
                text='senohouse'
                label='senohouse'
                desc='Beautiful & breathtaking at the Apricus Sea Breeze Max Resort & Spa.
                 We are open to welcome our guests. Experience a luxurious stay at Varca South Goa. 
                116 room property with deluxe and executive room nearly 1.2 kms from famous fatrade beach of south Goa.'
                btntext='30% off'
                path='/senohouse'
                className='card1'
              />
            </ul>
            <ul className='cards__items1'>
            <h1>Explore More   |</h1>


              <Carditem
                src='images/img-h7.jfif'
                text='kartav'
                label='kartav'
                desc='Beautiful & breathtaking at the Apricus Sea Breeze Max Resort & Spa.
                 We are open to welcome our guests. Experience a luxurious stay at Varca South Goa. 
                116 room property with delux south Goa.'
                path='/kartav'
                btntext='₹12000/-'
                className='card1'
              />
              <Carditem
                src='images/img-h8.jpg'
                text='vydehi'
                label='vydehi'
                desc='Know the info about touring,accommodations,and entertaining tourists spots  & travel guide, its travel attractions like wildlife
      , hill stations, beaches, adventure, pilgrimage and tour packages related to them.'
                path='/vydehi'
                btntext='₹13000/-'
                className='card2'
              />

              <Carditem

                src='images/img-h9.jfif'
                text='Mariya'
                label='Mariya'
                desc='Find the best accomodations all over the country/world at your best deals included with high star amminities all over.
      Get information for weekend trips to cities like Mumbai or Bengaluru and you can find the right hotel quickly
      .'
                btntext='₹20000/-'
                path='/Mariya'
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