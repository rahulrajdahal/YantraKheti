import { heroImage } from "assets/images";
import { Flex } from "components";
import { Body1, Body4, Title4 } from "components/texts";
import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  background: linear-gradient(180deg, rgba(3, 9, 19, 0) 0%, #030913 100%),
    url(${heroImage}) center/cover;
  border-radius: 24px;
  height: 38.75rem;
  margin: 0 15rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3rem;

  position: relative;
`;

function HeroContainer() {
  return (
    <Flex gap={5} direction="column" alignItems="center" marginTop={2}>
      <ImageContainer>
        <Title4
          fontWeight="700"
          lineHeight={72}
          color="#F8FAFC"
          style={{ width: "60%" }}
        >
          YantraKheti: We offer Digital Transformation for your farms
        </Title4>
        <Body4
          marginTop={1}
          lineHeight={32}
          color="#E1E8F0"
          style={{ width: "60%" }}
        >
          Hydroponics is the art of gardening without soil. Hydroponics is a
          Latin word meaning “working water.” In the absence of soil, water goes
          to work providing nutrients, hydration, and oxygen to plant life.
          Learn More
          {/* <Body4
          lineHeight={32}
          color="#E1E8F0"
          style={{ textDecoration: "underline" }}
        >
          Learn More
        </Body4> */}
        </Body4>
      </ImageContainer>
      <Body1 textAlign="center" lineHeight={40} style={{ width: "40%" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Body1>
    </Flex>
  );
}

export default HeroContainer;
