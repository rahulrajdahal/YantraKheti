import React from "react";
import styled from "styled-components";

import { Flex } from "components";
import { Body6 } from "components/texts";

interface IInputProps {
  label: string;
  width?: string;
  marginBottom?: number;
}

const InputBox = styled.input`
  height: 3rem;
  background: #ffffff;
  border: 1px solid #cad5e0;
  border-radius: 8px;
  width: 100%;
  padding: 0 0.8rem;
`;
function Input({ label, marginBottom = 0, width = "inherit" }: IInputProps) {
  return (
    <Flex
      direction="column"
      gap={0.5}
      width={width}
      marginBottom={marginBottom}
    >
      <Body6>{label}</Body6>
      <InputBox />
    </Flex>
  );
}

export default Input;
