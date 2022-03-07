import React from "react";
import image5 from '../images/image5.png';

const ExploreCard = (props) =>{
return(
<>
  <div className="explore_card">
    <div className="left">
    <img src={props.img} />
    </div>
    <div className="right">
    <h2>{props.head}</h2>
    <p>{props.para}</p>
    </div>
  </div>
</>
)
}

export default ExploreCard;