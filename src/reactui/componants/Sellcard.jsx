import React from "react";

const SellCard = (props) =>{
return(
<>
    <div className="sellcard">
        <h2 id="sellcardh2">{props.head}</h2>
        <p>{props.para}</p>
    </div>
</>
)
}

export default SellCard;