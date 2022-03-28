import React from "react";
import styled from "styled-components";

import { Button, Flex } from "components";
import { Body1, Body3, Body5 } from "components/texts";
import HeroContainer from "containers/landing/hero";
import Navbar from "components/navbar";
import {
  arduinoImage,
  co2Image,
  heroImage,
  humidImage,
  otherImage,
  temperatureImage,
} from "assets/images";
import Footer from "components/footer";
import { FeaturesContainer } from "containers";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroContainer />
      <FeaturesContainer />
      <Footer />
    </>
  );
}

export default LandingPage;
