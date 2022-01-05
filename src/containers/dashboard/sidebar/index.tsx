import { LogoIcon } from "assets/icons";
import { Flex } from "components";
import { Body4, Body5, CaptionText } from "components/texts";
import { MantraIcon } from "meistericons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ActiveIndicator = styled.div`
  background: #16ad4d;
  width: 0.375rem;
  height: 3rem;
  position: absolute;
  top: 0;
  left: 0;
`;

function SidebarContainer() {
  const links = [
    { id: 1, icon: <MantraIcon />, link: "My Dashboard" },
    { id: 2, icon: <MantraIcon />, link: "Humidity" },
    { id: 3, icon: <MantraIcon />, link: "Temperature" },
    { id: 4, icon: <MantraIcon />, link: "Motor" },
    { id: 5, icon: <MantraIcon />, link: "Water Pump" },
    { id: 6, icon: <MantraIcon />, link: "Plant Status" },
  ];

  const [activeLink, setActiveLink] = useState<string>("My Dashboard");

  return (
    <Flex
      direction="column"
      width="13%"
      style={{
        background: "#030913",
        height: "100vh",
      }}
    >
      <Flex
        marginTop={2}
        marginBottom={2}
        width="100%"
        gap={0.5}
        alignItems="center"
        justifyContent="center"
        style={{
          paddingBottom: "0.81rem",
          borderBottom: "1px solid #1C2A3A",
        }}
      >
        <LogoIcon />
        <Flex direction="column">
          <Body4 color="#F8FAFC" fontWeight="700" lineHeight={28}>
            YantraKheti
          </Body4>
          <CaptionText color="#CAD5E0" lineHeight={20} style={{ fontSize: 13 }}>
            Monitoring System
          </CaptionText>
        </Flex>
      </Flex>
      <>
        {links.map((item) => (
          <Flex
            key={item.id}
            onClick={() => setActiveLink(item.link)}
            gap={0.75}
            marginBottom={1.25}
            width="90%"
            style={{
              cursor: "pointer",
              padding: "0.75rem 0.625rem",
              background: `${
                activeLink === item.link ? "#1C2A3A" : "transparent"
              } `,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              position: "relative",
            }}
          >
            <>
              {activeLink === item.link && <ActiveIndicator />}

              {item.icon}
            </>
            <Body5
              lineHeight={24}
              fontWeight={activeLink === item.link ? "bold" : "500"}
              color={activeLink === item.link ? "#F8FAFC" : "#91A4B7"}
            >
              {item.link}
            </Body5>
          </Flex>
        ))}
      </>
      {/* <Flex direction="column"></Flex> */}
    </Flex>
  );
}

export default SidebarContainer;
