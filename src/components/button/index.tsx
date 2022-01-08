import React from "react";
import styled from "styled-components";

interface IContainerProps {
  variant: string;
  color: string;
  width: string;
  background: string;
}

const Container = styled.button<IContainerProps>`
  padding: 0.625rem 1.25rem;
  background: ${(p) => (p.variant === "fill" ? p.background : "transparent")};
  border-radius: 8px;
  border: ${(p) => (p.variant === "fill" ? "none" : `2px solid ${p.color}`)};
  outline: none;

  font-family: PlusJakarta;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  color: ${(p) => p.color};

  width: ${(p) => p.width};

  &:hover {
    cursor: pointer;
  }
`;

interface IButtonProps {
  variant?: "fill" | "outlined";
  text: string;
  color?: string;
  background?: string;
  width?: string;
  onClick?(): any;
}

function Button({
  text,
  variant = "fill",
  background = "#030913",
  color = "#f8fafc",
  width = "auto",
  onClick,
}: IButtonProps) {
  return (
    <Container
      width={width}
      variant={variant}
      background={background}
      color={color}
      onClick={onClick}
    >
      {text}
    </Container>
  );
}

export default Button;
