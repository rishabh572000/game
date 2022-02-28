import React from "react";
import Header from './Header';
import CreateSell from "./componants/CreateSell";
import Notable from "./componants/Notable";
import Company from "./componants/Company";
import Explore from "./componants/Explore";
import Footer from "./componants/Footer";
import Tranding from "./componants/Tranding";
import Resource from "./componants/Resource";
import Faq from "./componants/Faq";


const App = () =>{
return(
<>
  <Header />
  <CreateSell />
  <Notable />
  <Company />
  <Tranding />
  <Explore />
  <Faq />
  <Resource />
  <Footer />
</>
)
}
export default App;