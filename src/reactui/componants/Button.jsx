import React from "react";

const Button = (props) =>{
return(
<>
  <div className="button" style={{background:props.back, border:props.border}}>{props.name}</div>
</>
)
}
export default Button;