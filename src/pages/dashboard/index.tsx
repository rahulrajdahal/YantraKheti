import React, { useState } from "react";
import { Flex } from "components";
import { SidebarContainer } from "containers";
import {
  MyDashboardContainer,
  HumidityContainer,
  TemperatureContainer,
  MotorContainer,
  WaterpumpContainer,
  PlantstatusContainer,
} from "containers";

function DashboardPage() {
  const [view, setView] = useState<string>("My Dashboard");

  const getView = () => {
    switch (view) {
      case "MY Dashboard":
        return <MyDashboardContainer />;

      case "Humidity":
        return <HumidityContainer />;

      case "Temperature":
        return <TemperatureContainer />;

      case "Motor":
        return <MotorContainer />;

      case "Water Pump":
        return <WaterpumpContainer />;

      case "Plant Status":
        return <PlantstatusContainer />;

      default:
        return <MyDashboardContainer />;
    }
  };

  return (
    <Flex gap={2} width="100%">
      <SidebarContainer view={view} setView={setView} />
      {getView()}
    </Flex>
  );
}

export default DashboardPage;
