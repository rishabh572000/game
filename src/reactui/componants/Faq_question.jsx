import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";


const Faq_question = () =>{
  const [togglestate, setTogglestate] =useState(1);

const toggle = (index) =>{;
    setTogglestate(index);
}


return(
<> 
  <div className="faq_question">
    <div className="item">
      <div className={"heading"} onClick={()=>toggle(1)}>
      <h3>How do I create an NFT?</h3>
      <AiOutlineDown />
      </div>
      <p id="faqitems" className={togglestate===1?'active':'none'}>From Opensea.io, go to your profile icon and click “Create” in 
      the top right corner. You’ll be taken to the NFT item creation
       page. This page will allow you to upload your NFT file, name it 
       and add a description.</p>
    </div>
    <div className="item">
      <div className="heading" onClick={()=>toggle(2)}>
      <h3>How do I create an NFT?</h3>
      <AiOutlineDown />
      </div>
      <p id="faqitems" className={togglestate===2?'active':'none'}>From Opensea.io, go to your profile icon and click “Create” in 
      the top right corner. You’ll be taken to the NFT item creation
       page. This page will allow you to upload your NFT file, name it 
       and add a description.</p>
    </div>
    <div className="item">
      <div className="heading" onClick={()=>toggle(3)}>
      <h3>How do I create and sell NFTs on Polygon?</h3>
      <AiOutlineDown />
      </div>
      <p className={togglestate===3?'active':'none'}>From Opensea.io, go to your profile icon and click “Create” in 
      the top right corner. You’ll be taken to the NFT item creation
       page. This page will allow you to upload your NFT file, name it 
       and add a description.</p>
    </div>
    <div className="item">
      <div className="heading" onClick={()=>toggle(4)}>
      <h3>Does Opensea allow physical item trades?</h3>
      <AiOutlineDown />
      </div>
      <p className={togglestate===4?'active':'none'}>From Opensea.io, go to your profile icon and click “Create” in 
      the top right corner. You’ll be taken to the NFT item creation
       page. This page will allow you to upload your NFT file, name it 
       and add a description.</p>
    </div>
  </div>
</>
)
}

export default Faq_question;