import React, { useState } from "react";
import styled from "styled-components";
import { Flex } from "components";
import { Body1, Body2, Body4, Body5, Title3, Title4 } from "components/texts";
import {
  ArchiveAddIcon,
  BedIcon,
  DashboardIcon,
  NoEntryIcon,
  NotificationIcon,
  SearchAddIcon,
  SearchIcon,
  SettingsHorizontalIcon,
} from "meistericons";

const Container = styled(Flex)`
  background: #f0f5f9;
  padding: 3% 6.5%;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 1368px) {
    flex-direction: row;
    padding: 7.29% 12.5%;
  }
`;

const Features = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 1368px) {
    width: 50%;
  }

  @media (min-width: 1920px) {
    display: grid;
    grid-template-columns: repeat(2, 90%);
    gap: 6.25rem;
  }
`;

const FeaturesBody = styled(Body4)`
  color: #030913;
  width: 100%;

  font-size: 14px;
  line-height: 20px;
  @media (min-width: 768px) {
    line-height: 32px;
    font-size: 18px;
    width: 70%;
  }
`;

interface IIconContainerProps {
  background: string;
}
const IconContainer = styled.div<IIconContainerProps>`
  width: 3.75rem;
  height: 3.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(p) => p.background};
  border-radius: 16px;
`;

const StickyContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;

  @media (min-width: 1368px) {
    width: 50%;
    position: sticky;
    top: 0;
  }
`;

function FeaturesContainer() {
  const [stick, setStick] = useState<boolean>(false);

  const features = [
    {
      id: 1,
      icon: <DashboardIcon />,
      feature: "Humidity",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#D2DCFA",
    },
    {
      id: 2,
      icon: <ArchiveAddIcon />,
      feature: "Temperature",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#D0EFDB",
    },
    {
      id: 3,
      icon: <SearchIcon />,
      feature: "Co2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#F8CCDE",
    },
    {
      id: 4,
      icon: <SearchAddIcon />,
      feature: "Harmful Gases",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#FDE3CD",
    },
    {
      id: 5,
      icon: <NotificationIcon />,
      feature: "Fire detection",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#D2DCFA",
    },
    {
      id: 6,
      icon: <SettingsHorizontalIcon />,
      feature: "Accumulators",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#D0EFDB",
    },
    {
      id: 7,
      icon: <NoEntryIcon />,
      feature: "Web App",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#F8CCDE",
    },
    {
      id: 8,
      icon: <BedIcon />,
      feature: "IOT",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#FDE3CD",
    },
  ];

  return (
    <Container marginTop={7.5}>
      <StickyContainer>
        <Title4
          color="#030913"
          fontWeight="700"
          lineHeight={60}
          style={{ fontSize: 40 }}
          marginBottom={0.75}
        >
          Our Top Features
        </Title4>
        <FeaturesBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </FeaturesBody>
      </StickyContainer>

      <Features>
        {features.map((item) => (
          <Flex key={item.id} direction="column" gap={0.75}>
            <Flex gap={0.75} alignItems="center">
              <IconContainer background={item.background}>
                {item.icon}
              </IconContainer>
              <Body1 color="#030913" fontWeight="700" lineHeight={32}>
                {item.feature}
              </Body1>
            </Flex>

            <Body5 color="#030913" lineHeight={24}>
              {item.desc}
            </Body5>
          </Flex>
        ))}
      </Features>
    </Container>
  );
}

export default FeaturesContainer;
