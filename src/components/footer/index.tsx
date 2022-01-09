import React from "react";
import styled from "styled-components";
// import { footerLogo, logo } from "../../assets/images";
import Flex from "../flex";
import { Body3, Body4, Body6 } from "components/texts";
import { LogoIcon } from "assets/icons";

const Container = styled.section`
  background: #000000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.75rem;
`;

const Links = styled.div`
  display: flex;
  gap: 15rem;
  padding-bottom: 3.75rem;
  border-bottom: 1px solid #2d2d2d;
`;

function Footer() {
  const links = [
    {
      id: 1,
      title: "PROGRAMS",
      links: [
        { id: 1, link: "Karkhana Science" },
        { id: 2, link: "Karkhana STEM Books" },
        { id: 3, link: "Robotics & Electronics" },
        { id: 4, link: "Story & Enginerring" },
        { id: 5, link: "Engineering Adv" },
      ],
    },
    {
      id: 2,
      title: "COMPANY",
      links: [
        { id: 1, link: "About" },
        { id: 2, link: "Careers" },
        { id: 3, link: "Contact Us" },
        { id: 4, link: "Legacy" },
        { id: 5, link: "Partners" },
      ],
    },
    {
      id: 3,
      title: "MISC",
      links: [
        { id: 1, link: "Privacy Policy" },
        { id: 2, link: "Cookie Policy" },
        { id: 3, link: "Developers" },
      ],
    },
    {
      id: 4,
      title: "SOCIALS",
      links: [
        { id: 1, link: "Facebook" },
        { id: 2, link: "Instagram" },
        { id: 3, link: "LinkedIn" },
        { id: 4, link: "Youtube" },
      ],
    },
  ];

  return (
    <Container>
      {/* <img src={} alt="logo" style={{ marginTop: 80 }} /> */}
      <LogoIcon style={{ marginTop: 80 }} />

      <Links>
        {links.map((item) => (
          <Flex
            key={item.id}
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Body6
              marginBottom={1}
              color="#fff"
              lineHeight={20}
              fontWeight="400"
            >
              {item.title}
            </Body6>
            <ul>
              {item.links.map((item) => (
                <li>
                  <Body4 key={item.id} color="#fff" marginBottom={0.5}>
                    {item.link}
                  </Body4>
                </li>
              ))}
            </ul>
          </Flex>
        ))}
      </Links>

      <Flex width={"65%"}>
        <Body6 lineHeight={20} fontWeight="500" color="#fff">
          Copyright 2021. DahalInc. All Rights Reserved.
        </Body6>
        <Body6 lineHeight={20} fontWeight="500" color="#fff" marginBottom={1.2}>
          Developed by Team YantriKheti
        </Body6>
      </Flex>
    </Container>
  );
}

export default Footer;
