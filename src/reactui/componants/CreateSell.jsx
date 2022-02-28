import React from "react";
import SellCard from "./Sellcard";
import './createsell.css';

const CreateSell = () =>{
return(
<>
<div className="create">
  <div className="main_create">
    <h2>Create & Sell NFT's</h2>
    <p>A place of light and shade, chairoscuro
     is the realm between the light and dark.</p>
    <div className="cards_group">
      <SellCard head='set up your wallet' para="Once you've set up your wallet
       of choice. connect it to OpenSea. Learn about the wallets we support"/>
       <SellCard head='set up your wallet' para="Once you've set up your wallet
       of choice. connect it to OpenSea. Learn about the wallets we support"/>
       <SellCard head='set up your wallet' para="Once you've set up your wallet
       of choice. connect it to OpenSea. Learn about the wallets we support"/>
       <SellCard head='set up your wallet' para="Once you've set up your wallet
       of choice. connect it to OpenSea. Learn about the wallets we support"/>
    </div>
  </div>
</div>
</>
)
}

export default CreateSell;