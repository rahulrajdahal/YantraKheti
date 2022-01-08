import React from "react";
import styled from "styled-components";

import { Body1, Body3, Body5 } from "components/texts";
import { Flex } from "components";
import { ThermometerIcon } from "assets/icons";

export const ViewContainer = styled.div`
  margin: 2rem;
`;

const Card = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
`;

function MyDashboardContainer() {
  const cards = [
    { id: 1, title: "Temperature", value: "32°C" },
    { id: 2, title: "Humidity", value: "16%" },
    { id: 3, title: "CO2", value: "216 PPM" },
    { id: 4, title: "Other gases", value: "118 PPM" },
  ];

  return (
    <ViewContainer>
      <Body1 lineHeight={32} fontWeight="700" color="#0D1829">
        MY Dashboard
      </Body1>

      <Flex gap={2} marginTop={4}>
        {cards.map((item) => (
          <Card key={item.id}>
            <Body3 fontWeight="400">{item.title}</Body3>
            <Body5 marginTop={0.5}>{item.value}</Body5>
          </Card>
        ))}
      </Flex>
    </ViewContainer>
  );
}

export default MyDashboardContainer;
