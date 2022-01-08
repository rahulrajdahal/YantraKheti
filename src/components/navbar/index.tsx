import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Flex } from "components";
import { Body3, Body5 } from "components/texts";
import { LogoIcon } from "assets/icons";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Flex
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      style={{ padding: "1.625rem 0", height: "6.25rem", margin: "0 15rem" }}
    >
      <Flex gap={0.75} alignItems="center" onClick={() => navigate("/")}>
        <LogoIcon />
        <Body3 lineHeight={32}>YantriKheti</Body3>
      </Flex>

      <Flex gap={3} alignItems="center">
        <Body5>How it Works</Body5>
        <Body5>Features</Body5>
        <Button text="Get Started" onClick={() => navigate("/auth")} />
      </Flex>
    </Flex>
  );
}
