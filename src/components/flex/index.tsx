import React from "react";
import styled from "styled-components";

interface IFlexProps {
  style?: any;
  display?: "flex" | "inline-flex";
  direction?: "row" | "column";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  justifyContent?:
    | "flex-start"
    | "space-evenly"
    | "space-between"
    | "space-around"
    | "flex-end"
    | "center";
  width?: string;
  children?: JSX.Element | JSX.Element[];
  marginTop?: number;
  marginBottom?: number;
  gap?: number;
  wrap?: "wrap" | "no-wrap";
  onClick?(): any;
  rest?: any;
}

type IContainerProps = {
  display: string;
  direction: string;
  alignItems: string;
  justifyContent: string;
  width: string;
  marginTop: number;
  marginBottom: number;
  gap: number;
  wrap: string;
};

const Container = styled.div<IContainerProps>`
  display: ${(p) => p.display};
  gap: ${(p) => p.gap}rem;
  flex-direction: ${(p) => p.direction};
  align-items: ${(p) => p.alignItems};
  justify-content: ${(p) => p.justifyContent};
  width: ${(p) => p.width};
  margin-top: ${(p) => p.marginTop}rem;
  margin-bottom: ${(p) => p.marginBottom}rem;
  flex-wrap: ${(p) => p.wrap};
`;

const Flex = (props: IFlexProps) => {
  const {
    children,
    display = "flex",
    direction = "row",
    alignItems = "flex-start",
    justifyContent = "flex-start",
    style,
    width = "auto",
    marginTop = 0,
    marginBottom = 0,
    gap = 0,
    wrap = "no-wrap",
    onClick,
    ...rest
  } = props;

  return (
    <Container
      display={display}
      gap={gap}
      wrap={wrap}
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      width={width}
      marginTop={marginTop}
      marginBottom={marginBottom}
      onClick={onClick}
      style={style}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Flex;
