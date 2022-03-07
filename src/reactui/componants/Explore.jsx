import React from "react";
import ExploreCard from "./ExploreCard";
import ExploreApi from "./ExploreApi";
import Button from './Button';
import './explore.css';

const Explore = () =>{
return(
<>
  <div className="explore">
      <h2>Explore Categories</h2>
      <p>A play of light and shade, chairoscuro is the realm between the light and dark</p>
      <div className="cards">
      {ExploreApi.map((val) =>{
        return(
        <> 
         <ExploreCard  
           img={val.img}
           head={val.head}
           para={val.para}  
         />
        </>
        )}
      )}
      </div>
      <div className="buttons">
      <Button name='Explore Marketplace' 
             back='#458DEA' 
             border='1.5px solid #458DEA'/>
      </div>
  </div>
</>
)
}

export default Explore;