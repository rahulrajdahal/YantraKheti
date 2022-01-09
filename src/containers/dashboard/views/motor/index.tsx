import React, { useState } from "react";
import Switch from "react-switch";

import { Flex } from "components";
import { Body1, Body3 } from "components/texts";
import { ViewContainer } from "../mydashboard";

function MotorContainer() {
  const [motor1checked, setMotor1Checked] = useState(true);
  const [motor2checked, setMotor2Checked] = useState(false);
  const [motor3checked, setMotor3Checked] = useState(false);

  const motors = [
    {
      id: 1,
      title: "Motor1",
      active: motor1checked,
      setActive: setMotor1Checked,
    },
    {
      id: 2,
      title: "Motor2",
      active: motor2checked,
      setActive: setMotor2Checked,
    },
    {
      id: 3,
      title: "Motor3",
      active: motor3checked,
      setActive: setMotor3Checked,
    },
  ];

  return (
    <ViewContainer>
      <Body1 lineHeight={32} fontWeight="700" color="#0D1829">
        MotorContainer
      </Body1>

      <Flex gap={3} marginTop={8}>
        {motors.map((item) => (
          <Flex gap={0.5} key={item.id}>
            <Body3>{item.title}</Body3>
            <Switch
              checked={item.active}
              onChange={() => item.setActive(!item.active)}
            />
          </Flex>
        ))}
      </Flex>
    </ViewContainer>
  );
}

export default MotorContainer;
