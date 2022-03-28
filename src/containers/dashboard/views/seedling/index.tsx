import { Button, Flex } from "components";
import { Body1 } from "components/texts";
import React, { useState } from "react";
import styled from "styled-components";
import { ViewContainer } from "../mydashboard";

function SeedlingContainer() {
  const [form, setForm] = useState();

  return (
    <ViewContainer>
      <Body1 lineHeight={32} fontWeight="700" color="#0D1829" marginBottom={5}>
        SeedlingContainer
      </Body1>

      <Flex direction="column" gap={4}>
        <input type="file" />
        <Button text="Seed Data" />
      </Flex>
    </ViewContainer>
  );
}

export default SeedlingContainer;
