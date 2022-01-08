import React from "react";
import styled from "styled-components";

import {
  DashboardIcon,
  HumidifierIcon,
  LogoIcon,
  LogoutIcon,
  MotorIcon,
  ThermometerIcon,
  TreeIcon,
  WaterwellIcon,
} from "assets/icons";
import { Flex } from "components";
import { Body4, Body5, CaptionText } from "components/texts";
import { useNavigate } from "react-router-dom";

const ActiveIndicator = styled.div`
  background: #16ad4d;
  width: 0.375rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

interface ISidebarContainerProps {
  view: string;
  setView: any;
}

function SidebarContainer({ view, setView }: ISidebarContainerProps) {
  const navigate = useNavigate();
  const links = [
    {
      id: 1,
      icon: (
        <DashboardIcon
          style={{
            color: view === "My Dashboard" ? "#F8FAFC" : "#91A4B7",
          }}
        />
      ),
      link: "My Dashboard",
    },
    {
      id: 2,
      icon: (
        <HumidifierIcon
          style={{
            color: view === "Humidity" ? "#F8FAFC" : "#91A4B7",
          }}
        />
      ),
      link: "Humidity",
    },
    {
      id: 3,
      icon: (
        <ThermometerIcon
          style={{
            color: view === "Temperature" ? "#F8FAFC" : "#91A4B7",
          }}
        />
      ),
      link: "Temperature",
    },
    {
      id: 4,
      icon: (
        <MotorIcon
          style={{
            color: view === "Motor" ? "#F8FAFC" : "#91A4B7",
          }}
        />
      ),
      link: "Motor",
    },
    {
      id: 5,
      icon: (
        <WaterwellIcon
          style={{
            color: view === "Water Pump" ? "#F8FAFC" : "#91A4B7",
          }}
        />
      ),
      link: "Water Pump",
    },
    {
      id: 6,
      icon: (
        <TreeIcon
          style={{
            color: view === "Plant Status" ? "#F8FAFC" : "#91A4B7",
          }}
        />
      ),
      link: "Plant Status",
    },
  ];

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
            onClick={() => setView(item.link)}
            gap={0.75}
            marginBottom={1.25}
            width="90%"
            style={{
              cursor: "pointer",
              padding: "0.75rem 1rem",
              background: `${view === item.link ? "#1C2A3A" : "transparent"} `,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              position: "relative",
            }}
          >
            <>
              {view === item.link && <ActiveIndicator />}

              {item.icon}
            </>
            <Body5
              lineHeight={24}
              fontWeight={view === item.link ? "bold" : "500"}
              color={view === item.link ? "#F8FAFC" : "#91A4B7"}
            >
              {item.link}
            </Body5>
          </Flex>
        ))}
        <Flex
          alignItems="center"
          gap={0.75}
          marginBottom={1.25}
          width="90%"
          onClick={() => navigate("/auth")}
          style={{
            cursor: "pointer",
            padding: "0.75rem 1rem",
            position: "absolute",
            bottom: 0,
          }}
        >
          <LogoutIcon />
          <Body5 lineHeight={24} color="#91A4B7">
            LogOut
          </Body5>
        </Flex>
      </>
      {/* <Flex direction="column"></Flex> */}
    </Flex>
  );
}

export default SidebarContainer;
