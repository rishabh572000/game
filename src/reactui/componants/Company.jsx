import React from "react";
import './company.css';
import image8 from '../images/image8.png';
import image9 from '../images/image9.png';
import image10 from '../images/image10.png';
import image11 from '../images/image11.png';
import image12 from '../images/image12.png';
import image13 from '../images/image13.png';


const Company = () =>{
return(
<>
    <div className="company">
      <div className="images">
        <img src={image13} />
        <img src={image12} />
        <img src={image11} />
        <img src={image10} />
        <img src={image8} />
        <img src={image9} />
      </div>
    </div>
</>
)
}

export default Company;