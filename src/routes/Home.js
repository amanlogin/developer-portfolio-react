import React from "react";
import NavBar from "../components/NavBar";
import Heroimage from "../components/Heroimage";
import Work from "../components/Work";
import Footer from "../components/Footer";

const home = () => {
  return (
    <div>
      <NavBar />
      <Heroimage />
      <Work />
      <Footer />
    </div>
  );
};

export default home;
