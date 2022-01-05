import HeroContainer from "containers/landing/hero";
import React from "react";
import Navbar from "../../components/navbar";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroContainer />
    </div>
  );
}

export default LandingPage;
