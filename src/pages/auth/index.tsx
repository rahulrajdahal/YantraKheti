import React from "react";
import styled from "styled-components";
import { Button, Flex, Navbar } from "components";
import { Body3, Body4, Title3, Title4 } from "components/texts";
import { LogoIcon } from "assets/icons";
import { useNavigate } from "react-router-dom";

const LeftContainer = styled.section`
  background: #e8f7ee;
  height: 100vh;
  width: 50%;
  padding: 3rem 0 0 6.25rem;
`;

function AuthPage() {
  const navigate = useNavigate();

  return (
    <>
      <Flex>
        <LeftContainer>
          <Flex gap={0.75} alignItems="center" onClick={() => navigate("/")}>
            <LogoIcon />
            <Body3 lineHeight={32}>YantriKheti</Body3>
          </Flex>
          <Title4
            color="#030913"
            lineHeight={60}
            fontWeight="700"
            marginTop={6.25}
            style={{ fontSize: 40, width: "60%" }}
          >
            Get Started by Logging into your account
          </Title4>

          <Body4
            color="#1C2A3A"
            marginTop={1}
            marginBottom={2}
            lineHeight={32}
            style={{ width: "50%" }}
          >
            Quickly Log In to your account and get access to all monitoring
            systems that we have to offer. Creating a new account is easy and
            FREE.
          </Body4>

          <Button text="Create My Account" />
        </LeftContainer>
      </Flex>
    </>
  );
}

export default AuthPage;
