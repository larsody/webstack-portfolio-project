import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Form from "../components/Form";

const Subscribe = () => {
  return <div>
      <Navbar />
      <Newsletter 
      headings=" " 
      text=" " />
      
      <Form />
   
    <Footer />
  </div>;
};

export default Subscribe;
