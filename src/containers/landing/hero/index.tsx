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

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3rem;

  position: relative;

  margin: 0 6%;

  @media (min-width: 768px) {
    margin: 0 12.5%;
  }
`;

const Info = styled(Body1)`
  width: 80%;
  line-height: 30px;
  text-align: center;

  @media (min-width: 768px) {
    line-height: 40px;
    width: 40%;
  }
`;

const ImageTitle = styled(Title4)`
  color: #f8fafc;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  @media (min-width: 768px) {
    line-height: 72px;
    width: 60%;
  }
`;

const ImageInfo = styled(Body4)`
  margin-top: 1rem;
  color: #e1e8f0;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: 768px) {
    line-height: 32px;
    width: 60%;
  }
`;

function HeroContainer() {
  return (
    <Flex gap={5} direction="column" alignItems="center" marginTop={2}>
      <ImageContainer>
        <ImageTitle>
          YantraKheti: We offer Digital Transformation for your farms
        </ImageTitle>
        <ImageInfo>
          Hydroponics is the art of gardening without soil. Hydroponics is a
          Latin word meaning “working water.” In the absence of soil, water goes
          to work providing nutrients, hydration, and oxygen to plant life.
          <span
            style={{
              textDecoration: "underline",
              color: "#E1E8F0",
              cursor: "pointer",
            }}
          >
            {" "}
            Learn More
          </span>
        </ImageInfo>
      </ImageContainer>

      <Info>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Info>
    </Flex>
  );
}

export default HeroContainer;
