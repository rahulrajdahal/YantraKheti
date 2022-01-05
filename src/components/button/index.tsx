import styled from "styled-components";
import React from "react";

const Container = styled.button`
  padding: 0.625rem 1.25rem;
  background: #030913;
  border-radius: 8px;
  border: none;
  outline: none;

  font-family: PlusJakarta;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  color: #f8fafc;

  &:hover {
    cursor: pointer;
  }
`;

interface IButtonProps {
  text: string;
  onClick?(): any;
}

function Button({ text, onClick }: IButtonProps) {
  return <Container onClick={onClick}>{text}</Container>;
}

export default Button;
