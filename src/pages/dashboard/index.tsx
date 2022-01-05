import React, { useState } from "react";
import { Title2 } from "components/texts";
import { Flex } from "components";
import { SidebarContainer } from "containers";
import MyDashboardContainer from "containers/dashboard/views/mydashboard";
import HumidityContainer from "containers/dashboard/views/humidity";
import TemperatureContainer from "containers/dashboard/views/temperature";
import MotorContainer from "containers/dashboard/views/motor";
import WaterpumpContainer from "containers/dashboard/views/waterpump";
import PlantstatusContainer from "containers/dashboard/views/plantstatus";

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
    <Flex gap={2}>
      <SidebarContainer view={view} setView={setView} />
      {getView()}
    </Flex>
  );
}

export default DashboardPage;
