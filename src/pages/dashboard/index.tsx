import React from "react";
import { Title2 } from "components/texts";
import { Flex } from "components";
import { SidebarContainer } from "containers";

function DashboardPage() {
  return (
    <Flex gap={2}>
      <SidebarContainer />
      <Title2>Dashboard</Title2>
    </Flex>
  );
}

export default DashboardPage;
