import React from "react";
import Button from './Button';
import Faq_question from './Faq_question';
import './faq.css';


const Faq = () =>{
return(
<>
  <div className="faq">
    <div className="left">
      <h2>We will try to help you if you are confused.</h2>
      <p>A fequently asked question (FAQ) forum is often used in articles, websites, email lists, 
      and online forums where common questions tend to recur.</p>
    </div>
    <div className="right">
      <Faq_question />
    <div className="faq_button">
      <Button name='View all' 
             back='#458DEA' 
             border='1.5px solid #458DEA'/>
    </div>
    </div>
  </div>
</>
)
};


export default Faq;