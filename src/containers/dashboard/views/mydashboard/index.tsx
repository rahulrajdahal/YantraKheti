import React from "react";
import styled from "styled-components";

import { Body1, Body3, Body5 } from "components/texts";
import { Button, Flex } from "components";
import { useDispatch } from "react-redux";
import { getSensorData } from "features/sensor/action";

export const ViewContainer = styled.div`
  margin: 2rem;
`;

const Card = styled.div`
  min-width: 23rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 12px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  background: #cad5e0;
`;

function MyDashboardContainer() {
  const dispatch = useDispatch();
  const cards = [
    { id: 1, title: "Temperature", value: "32°C" },
    { id: 2, title: "Humidity", value: "16%" },
    { id: 3, title: "CO2", value: "216 PPM" },
    { id: 4, title: "Other gases", value: "118 PPM" },
  ];

  const handleGetData = () => {
    console.log("GET DATA");
    dispatch(getSensorData());
  };

  return (
    <ViewContainer>
      <Body1 lineHeight={32} fontWeight="700" color="#0D1829">
        MY Dashboard
      </Body1>

      <Flex gap={2} marginTop={4} marginBottom={2}>
        {cards.map((item) => (
          <Card key={item.id}>
            <Body3 fontWeight="400">{item.title}</Body3>
            <Body5 marginTop={0.5}>{item.value}</Body5>
          </Card>
        ))}
      </Flex>

      <Button text="Get Data" onClick={handleGetData} />
    </ViewContainer>
  );
}

export default MyDashboardContainer;
