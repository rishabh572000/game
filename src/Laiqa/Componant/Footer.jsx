import React from 'react'
import FooterCard from './FooterCard';
import { AiOutlineRise } from "react-icons/ai";

export default function Footer() {
return (
<>
  <div className='footer'>
    <p>What Makes</p>
    <h2>Laiqa Pads Special</h2>
    <p id='button'>Explore <AiOutlineRise /></p>
    <div className='cards'>
    <FooterCard />
    <FooterCard />
    <FooterCard />
    </div>
  </div>
</>
)
}
