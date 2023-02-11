import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import Formcontent from "../components/Formcontent";

const contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="CONTACTS" text="Lets connect" />
      <Formcontent />
      <Footer />
    </div>
  );
};

export default contact;
