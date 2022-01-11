import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "meistericons";

import { Button, Flex } from "components";
import { Body3, Body4, Body5, Body6, Title4 } from "components/texts";
import { LogoIcon } from "assets/icons";
import { authImage } from "assets/images";
import Input from "components/input";
import { useDispatch } from "react-redux";
import { login, register } from "features/auth/action";

const LeftContainer = styled.section`
  background: #e8f7ee;
  height: 100vh;
  width: 64%;
  padding: 3rem 0 0 6.25rem;
`;

function AuthPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignup, setIsSignup] = useState<boolean>(false);

  const [form, setForm] = useState<{
    name: string;
    email: string;
    password: string;
  }>({ name: "", email: "", password: "" });

  const handleSubmit = () => {
    if (isSignup) {
      dispatch(register(form));
    } else {
      dispatch(login(form, navigate));
    }
  };

  return (
    <>
      <Flex gap={5} alignItems="center" width="100%">
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
            Quickly {isSignup ? "Create" : "Log In to"} your account and get
            access to all monitoring systems that we have to offer.{" "}
            {!isSignup && "Creating a new account is easy and FREE."}
          </Body4>

          <Button
            text={isSignup ? "Log In" : "Create My Account"}
            variant="outlined"
            color="#16AD4D"
            onClick={() => setIsSignup((prev) => !prev)}
          />

          <Flex
            alignItems="center"
            style={{ cursor: "pointer", position: "absolute", bottom: 32 }}
            onClick={() => navigate("/")}
          >
            <ArrowLeftIcon />
            <Body5 lineHeight={28}>Go Back to HomePage</Body5>
          </Flex>

          <img
            src={authImage}
            alt="login"
            style={{
              position: "absolute",
              bottom: 0,
              left: "25%",
              width: "45%",
            }}
          />
        </LeftContainer>

        <Flex
          direction="column"
          width="26%"
          style={{
            margin: "0 5%",
            zIndex: 2,
          }}
        >
          <Title4
            color="#030913"
            lineHeight={60}
            fontWeight="700"
            marginBottom={3.75}
            style={{ fontSize: 40 }}
          >
            {isSignup ? "Create Your Account" : "Log In"}
          </Title4>
          <>
            {isSignup && (
              <Input
                label="Your Name"
                marginBottom={2}
                width="100%"
                onChange={(e: any) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            )}
          </>
          <Input
            label="Your Email"
            marginBottom={2}
            width="100%"
            onChange={(e: any) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            label="Your Password"
            marginBottom={2}
            width="100%"
            onChange={(e: any) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          <Body6
            color="#2051E5"
            lineHeight={20}
            marginBottom={3}
            style={{ alignSelf: "flex-end" }}
          >
            Forgot Password?
          </Body6>

          <Button
            text={isSignup ? "Create Account" : "Log In"}
            background="#16AD4D"
            width="100%"
            // onClick={() => navigate("/dashboard")}
            onClick={handleSubmit}
          />
        </Flex>
      </Flex>
    </>
  );
}

export default AuthPage;
