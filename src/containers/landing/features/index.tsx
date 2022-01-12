import React, { useState } from "react";
import styled from "styled-components";
import { Flex } from "components";
import { Body1, Body2, Body4, Body5, Title3, Title4 } from "components/texts";
import { DashboardIcon } from "meistericons";

const Container = styled(Flex)`
  background: #f0f5f9;
  padding: 7.29% 12.5%;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 6.25rem;
  width: 50%;
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
  position: sticky;
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
      icon: <DashboardIcon />,
      feature: "Humidity",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#D0EFDB",
    },
    {
      id: 3,
      icon: <DashboardIcon />,
      feature: "Humidity",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#F8CCDE",
    },
    {
      id: 4,
      icon: <DashboardIcon />,
      feature: "Humidity",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#FDE3CD",
    },
    {
      id: 5,
      icon: <DashboardIcon />,
      feature: "Humidity",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#D2DCFA",
    },
    {
      id: 6,
      icon: <DashboardIcon />,
      feature: "Humidity",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#D0EFDB",
    },
    {
      id: 7,
      icon: <DashboardIcon />,
      feature: "Humidity",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#F8CCDE",
    },
    {
      id: 8,
      icon: <DashboardIcon />,
      feature: "Humidity",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      background: "#FDE3CD",
    },
  ];

  return (
    <Container marginTop={7.5}>
      <StickyContainer direction="column" width="50%">
        <Title4
          color="#030913"
          fontWeight="700"
          lineHeight={60}
          style={{ fontSize: 40 }}
          marginBottom={0.75}
        >
          Our Top Features
        </Title4>
        <Body4 lineHeight={32} color="#030913" style={{ width: "70%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Body4>
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
