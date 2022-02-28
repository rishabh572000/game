import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillCreditCard } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import './componants/Header.css';
import Header_image from './images/image.png';
import Button from './componants/Button';

const Header = () =>{

const sidebar = () =>{
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}
const sidebar_remove = () =>{
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}



return(
<>
<div className="header">
  <div className="navigation">
    <div className="left">
        <h2>OpenSea</h2>
    </div>
    <div className="right">
        <p id='search'><AiOutlineSearch /></p>
        <input type='text' placeholder='Search' />
        <p><AiFillCreditCard /></p>
        <p id="menu" onClick={sidebar}><AiOutlineMenu /></p>
    </div>
  </div>
  <div className="header_body">
      <div className="left">
        <h1>Discover. Collect.&Sell. Extraordinary</h1>
        <h2>NFT's</h2>
        <p>On the worlr's first & largest NFT marketplace.</p>
        <div className="head_left_btn">
        <Button name='Explore' id='button_head'
             back='#458DEA' 
             border='1.5px solid #458DEA'/>
        <Button name='Create' 
             back='transparent' 
             border='1.5px solid #FFFFFF'/>
        </div>


        <a>Get Featured On The Homepage</a>
      </div>
      <div className="right">
          <img src={Header_image} />
          <a href='#'>SoulCurry Art</a>
          <p>A play of light and shade, chairoscurso is the
           reaim between the light and dark</p>
           <Button name='Place Bid' 
             back='rgba(255, 255, 255, 0.2)' 
             border='1.5px solid #FFFFFF'/>
      </div>
  </div>
</div>
<div className="sidebar">
  <AiOutlineClose id='cross' onClick={sidebar_remove}/>
  <p>Home</p>
  <p>About</p>
  <p>Service</p>
  <p>Career</p>
</div>
</>
)
}

export default Header;