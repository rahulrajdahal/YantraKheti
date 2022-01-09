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
    <div>
      <Navbar />
      <HeroContainer />

      <Flex
        gap={6.25}
        marginTop={2}
        alignItems="center"
        style={{ padding: "0 5%" }}
      >
        <ArduinoImage src={arduinoImage} alt="kits" />

        <Flex gap={2.5} direction="column" alignItems="flex-start">
          <Body1 style={{ width: 600 }} lineHeight={48}>
            We create learning kits for middle-school students as making teaches
            children to be resourceful, to reshape their own environment, to
            solve novel problems, and thus make them confident in the face of
            nobel and unexpected problems.
          </Body1>

          <Button text="Shop for Karkhana Kits" background="#D83A56" />
        </Flex>
      </Flex>

      <Flex
        justifyContent="space-between"
        marginBottom={4}
        style={{ padding: "2rem 15%", background: "grey" }}
      >
        {features.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: `url(${item.img}) center/cover`,
              width: "10rem",
              height: "10rem",
              borderRadius: "50%",
            }}
          >
            <Body5>{item.title}</Body5>
          </div>
        ))}
      </Flex>
      <Footer />
    </div>
  );
}

export default LandingPage;
