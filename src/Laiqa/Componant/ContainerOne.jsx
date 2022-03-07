import React from 'react';
import laiqa from './images/laiqa.jpg';
import { AiFillStar } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";

export default function ContainerOne() {
return (
<>
<div className='containerOne'>
<div className='left'>
  <h2>MENSTRUAL HYGIENE</h2>
  <h1>MODERATE FLOW SANITARY PAD</h1>
  <div className='star'>
  <AiFillStar />
  <AiFillStar />
  <AiFillStar />
  <AiFillStar />
  <AiFillStar />
  </div>
  <p>Pads that move with you, where you go. So soft and thin, you forget you have them on.</p>
  <p>Designed to provide lead-proof rapid absorbency for up to 12 hours</p>
  <div className='details'>
  <div className='left'>
      <p>280mm L Pads</p>
      <p>COD Available</p>
      <p>Organic cotton & no chemicals</p>
  </div>
  <div className='right'>
      <p>Free Shipping above 299</p>
      <p>Delivered in 3 working days</p>
  </div>
  </div>
  <div className='days'>
      <p>10PADS</p>
      <p>20PADS</p>
      <p>30PADS</p>
      <p>60PADS</p>
  </div>
  <div className='addCards'>
      <h2>ADD TO CARDS</h2>
      <h2>300</h2>
  </div>
  <p id='offer'>Or start <span>subscription</span> & Get upto <span>20% off</span></p>
  <div className='periodRoll'>
      <div className='black'></div>
      <div className='pContent'>
          <h3>Period Roll on</h3>
          <p>in publishing and graphic</p>
      </div>
      <AiOutlineRise />
  </div>
</div>
<div className='right'>
    <img src={laiqa}  />
</div>
</div>
</>
)
}
