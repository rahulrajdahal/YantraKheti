import { ArrowLeftIcon } from "meistericons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { LogoIcon } from "assets/icons";
import { authImage } from "assets/images";
import { Button, Flex } from "components";
import Input from "components/input";
import { Body3, Body4, Body5, Body6, Title4 } from "components/texts";
import { login, register } from "features/auth/action";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";

const Container = styled(Flex)`
  align-items: center !important;
  width: 100%;
  flex-direction: column;

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

const LeftContainer = styled.section`
  background: #e8f7ee;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 1100px) {
    width: 50%;
  }

  @media (min-width: 1368px) {
    width: 64%;
    padding: 3rem 0 0 6.25rem;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1.5rem;

  @media (min-width: 1100px) {
    width: 50%;
    margin: 0 5% 0 0;
  }
  @media (min-width: 1368px) {
    width: 26%;
    margin: 0 5%;
    z-index: 2;
  }
`;

const BackContainer = styled(Flex)`
  cursor: pointer;
  align-items: center;

  position: absolute;
  top: 0.5rem;

  @media (min-width: 1100px) {
    top: inherit;
  }

  @media (min-width: 1368px) {
    bottom: 32px;
  }
`;

const BackIcon = styled(ArrowLeftIcon)`
  width: 40px;
  height: 40px;
  @media (min-width: 1100px) {
    width: initial;
    height: initial;
  }
`;

const LogoContainer = styled(Flex)`
  gap: 0.75rem;
  align-items: center;
  margin: 4rem 0;

  @media (min-width: 1100px) {
    margin: 2rem 0;
  }
`;

const LeftTitle = styled(Title4)`
  color: #030913;
  font-weight: 700;
  margin-top: 3rem;

  font-size: 20px;
  line-height: 30px;

  @media (min-width: 768px) {
    width: 80%;
    margin-top: 6.25rem;
  }
  @media (min-width: 1100px) {
    width: 100%;
    line-height: 60px;
    font-size: 40px;
  }
  @media (min-width: 1368px) {
    width: 40%;
  }
`;

const LeftInfo = styled(Body4)`
  color: #1c2a3a;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 32px;
    width: 100%;
  }

  @media (min-width: 1368px) {
    width: 40%;
  }
`;

const LeftImage = styled.img`
  width: 100%;

  @media (min-width: 1368px) {
    position: absolute;
    width: 45%;
    bottom: 0;
    left: 25%;
  }
`;
function AuthPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const [isSignup, setIsSignup] = useState<boolean>(false);

  const [form, setForm] = useState<{
    name: string;
    email: string;
    password: string;
  }>({ name: "", email: "", password: "" });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(register(form, addToast));
    } else {
      dispatch(login(form, navigate, addToast));
    }
  };

  return (
    <Container>
      <LeftContainer>
        <LogoContainer onClick={() => navigate("/")}>
          <LogoIcon />
          <Body3 lineHeight={32}>YantriKheti</Body3>
        </LogoContainer>
        <LeftTitle>
          Get Started by {isSignup ? "Creating" : "Logging into"} your account
        </LeftTitle>

        <LeftInfo>
          Quickly {isSignup ? "Create" : "Log In to"} your account and get
          access to all monitoring systems that we have to offer.{" "}
          {!isSignup && "Creating a new account is easy and FREE."}
        </LeftInfo>

        <Button
          text={isSignup ? "Log In" : "Create My Account"}
          variant="outlined"
          color="#16AD4D"
          onClick={() => setIsSignup((prev) => !prev)}
        />

        <BackContainer onClick={() => navigate("/")}>
          <BackIcon />
          <Body5 lineHeight={28}>Go Back to HomePage</Body5>
        </BackContainer>

        <LeftImage src={authImage} alt="login" />
      </LeftContainer>

      <FormContainer>
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
              onChange={(e: any) => setForm({ ...form, name: e.target.value })}
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
          onChange={(e: any) => setForm({ ...form, password: e.target.value })}
        />
        {!isSignup ? (
          <Body6
            color="#2051E5"
            lineHeight={20}
            marginBottom={3}
            style={{ alignSelf: "flex-end", textDecoration: "underline" }}
          >
            Forgot Password?
          </Body6>
        ) : null}

        <Button
          text={isSignup ? "Create Account" : "Log In"}
          background="#16AD4D"
          width="100%"
          // onClick={() => navigate("/dashboard")}
          onClick={handleSubmit}
        />
      </FormContainer>
    </Container>
  );
}

export default AuthPage;
