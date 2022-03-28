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

const ArduinoImage = styled.img`
  width: 50%;
`;

function LandingPage() {
  const features = [
    { id: 1, title: "Humidity", img: humidImage },
    { id: 2, title: "Temperature", img: temperatureImage },
    { id: 3, title: "CO2", img: co2Image },
    { id: 4, title: "OtherGases", img: otherImage },
  ];

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
