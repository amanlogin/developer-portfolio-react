import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import WorkCard from "../components/WorkCard";
const project = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="PROJECTS" text="Some of my most recent works" />
      <WorkCard />
      <Footer />
    </div>
  );
};

export default project;
