import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="ABOUT" text="I'm full stack developer" />
      <Footer />
    </div>
  );
};

export default About;
