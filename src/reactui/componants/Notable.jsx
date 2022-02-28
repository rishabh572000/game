import React from "react";
import Button from './Button';
import './notable.css';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';


const Notable = () =>{
return(
<>
  <div className="notable">
    <div className="left">
      <div className="images">
          <img src={image3} />
          <img src={image4} />
          <img src={image2} />
          <img src={image5} />
      </div>
    </div>
    <div className="right">
      <h2>Notable Drops</h2>
      <p>Upload your work (image, video, audio, or 3D art), add a title and description
        and customized your NFTs status, and unlokable content.</p>
      <div className="right_button">
      <Button name='View all' 
             back='#458DEA' 
             border='1.5px solid #458DEA'/>
      </div>
    </div>
  </div>
</>
)
}

export default Notable;