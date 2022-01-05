import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "meistericons";

import { Button, Flex, Navbar } from "components";
import { Body3, Body4, Body5, Body6, Title3, Title4 } from "components/texts";
import { LogoIcon } from "assets/icons";
import { authImage } from "assets/images";
import Input from "components/input";

const LeftContainer = styled.section`
  background: #e8f7ee;
  height: 100vh;
  width: 64%;
  padding: 3rem 0 0 6.25rem;
`;

function AuthPage() {
  const navigate = useNavigate();

  return (
    <>
      <Flex
        gap={5}
        alignItems="center"
        // justifyContent="space-between"
        width="100%"
      >
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
            style={{ fontSize: 40, width: "40%" }}
          >
            Get Started by Logging into your account
          </Title4>

          <Body4
            color="#1C2A3A"
            marginTop={1}
            marginBottom={2}
            lineHeight={32}
            style={{ width: "40%" }}
          >
            Quickly Log In to your account and get access to all monitoring
            systems that we have to offer. Creating a new account is easy and
            FREE.
          </Body4>

          <Button text="Create My Account" variant="outlined" color="#16AD4D" />
          <Flex
            alignItems="flex-end"
            width="63%"
            justifyContent="space-between"
            style={{
              position: "absolute",
              bottom: "3.75rem",
            }}
          >
            <Flex
              alignItems="center"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <ArrowLeftIcon />
              <Body5 lineHeight={28}>Go Back to HomePage</Body5>
            </Flex>

            <img src={authImage} alt="login" />
          </Flex>
        </LeftContainer>

        <Flex
          direction="column"
          width="26%"
          style={{
            margin: "0 5%",
          }}
        >
          <Title4
            color="#030913"
            lineHeight={60}
            fontWeight="700"
            marginBottom={3.75}
            style={{ fontSize: 40 }}
          >
            Log In
          </Title4>

          <Input label="Your Username" marginBottom={2} width="100%" />
          <Input label="Your Password" marginBottom={2} width="100%" />
          <Body6
            color="#2051E5"
            lineHeight={20}
            marginBottom={3}
            style={{ alignSelf: "flex-end" }}
          >
            Forgot Password?
          </Body6>

          <Button
            onClick={() => navigate("/dashboard")}
            text="Log In"
            background="#16AD4D"
            width="100%"
          />
        </Flex>
      </Flex>
    </>
  );
}

export default AuthPage;
