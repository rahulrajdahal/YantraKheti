import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LogoIcon } from "assets/icons";
import { Button, Flex } from "components";
import { Body3, Body5 } from "components/texts";
import { EllipsisVIcon, HexCross1Icon } from "meistericons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Flex)`
  padding: 1.25rem 0;
  height: 6.25rem;
  margin: 0 12.5%;

  @media (min-width: 768px) {
  }
`;

const LinksContainer = styled(Flex)`
  gap: 3rem;
  align-items: center;
  display: none;

  @media (min-width: 1100px) {
    display: flex;
  }
`;

const OpenMenuLinks = styled(LinksContainer)`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const MenuIcon = styled(EllipsisVIcon)`
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 1100px) {
    display: none;
  }
`;

const OpenMenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  z-index: 1;
`;

const OpenMenuHeader = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
`;

const OpenMenuLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const links = [
  { id: 1, title: "How it Works" },
  { id: 2, title: "Features" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const scrollToFeatures = () => {
    const features = document.getElementById("features");

    if (features) {
      window.scrollTo({ top: features.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex gap={0.75} alignItems="center" onClick={() => navigate("/")}>
        <LogoIcon />
        <Body3 lineHeight={32}>YantriKheti</Body3>
      </Flex>

      <MenuIcon onClick={() => setMenuOpen(true)} />
      <>
        {menuOpen && (
          <OpenMenuContainer>
            <OpenMenuHeader>
              <Flex
                gap={0.75}
                alignItems="center"
                onClick={() => navigate("/")}
              >
                <LogoIcon />
                <Body3 lineHeight={32}>YantriKheti</Body3>
              </Flex>

              <HexCross1Icon
                style={{ cursor: "pointer" }}
                onClick={() => setMenuOpen(false)}
              />
            </OpenMenuHeader>

            <OpenMenuLinksContainer>
              <OpenMenuLinks>
                <Body5>How it Works</Body5>
                <Body5>Features</Body5>
                <Button
                  text="Get Started"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/auth");
                  }}
                />
              </OpenMenuLinks>
            </OpenMenuLinksContainer>
          </OpenMenuContainer>
        )}
      </>

      <LinksContainer>
        <Body5 onClick={scrollToFeatures}>
          <Link
            to={"#features"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            How it Works
          </Link>
        </Body5>
        <Body5 onClick={scrollToFeatures}>
          <Link
            to={"#features"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Features
          </Link>
        </Body5>

        <Button text="Get Started" onClick={() => navigate("/auth")} />
      </LinksContainer>
    </Container>
  );
}
