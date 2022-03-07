import React from "react";
import TrandingSwiper from './TrandingSwiper';
import './tranding.css';

const Tranding = () =>{
return(
<>
  <div className="tranding">
  <div className="text">
    <h2>Trending in All Categories</h2>
    <p>A play of light and shade, chairoscuro is the
     realm between the light and dark.</p>
  </div>
  <div className="right">
  <p>Recently Added</p>
  <p id="second">Mostly used</p>
  </div>
  <TrandingSwiper />
  </div>
</>
)
}

export default Tranding;