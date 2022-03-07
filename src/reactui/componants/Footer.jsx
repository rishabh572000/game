import React from "react";
import Button from './Button';
import './footer.css';


const Footer = () =>{
return(
<>
  <div className="footer">
    <div className="left">
      <h2>OpenSea</h2>
      <p>From OpenSea.io, go to your profile icon and click "Create"
      in top right corner. You'll be taken to the NFT item creation
      page, This page will allow you to upload your NFT file, name it
      and add a description.</p>
    </div>
    <div className="right">
        <div className="content">
            <div className="item">
                <h2>Resources</h2>
                <p>Help Center</p>
                <p>Platform Status</p>
                <p>partners</p>
                <p>Gas-Free Marketplace</p>
                <p>Suggestions</p>
                <p>Discord Communitiy</p>
                <p>Newsletter</p>
                <p>Blog</p>
                <p>Docs</p>
            </div>
            <div className="two">
            <div className="item">
                <h2>My Account</h2>
                <p>Profiles</p>
                <p>Platform Status</p>
                <p>partners</p>
            </div>
            <div className="item">
                <h2>Stats</h2>
                <p>Profiles</p>
                <p>Platform Status</p>
                <p>partners</p>
            </div>
            </div>
            <div className="item">
                <h2>Company</h2>
                <p>Profiles</p>
                <p>Platform Status</p>
                <p>partners</p>
            </div>
        </div>
      <div className="form">
        <h2>Stay In The Loop</h2>
        <p>Join our mailing list to stay in the loop with out newest feature 
        releases, NFT drops, and tips & tricks for navigating OpenSea.</p>
      
       <div className="input">
         <input type='text' placeholder="Email Address" />
         <div className="button">
         <Button name='Sign Up' 
             back='#004ADF' 
             border='1.5px solid #004ADF'/></div>
       </div>
       </div>
    </div>
  </div>
</>
)
}

export default Footer;