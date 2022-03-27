import React, { useState } from "react";
import Switch from "react-switch";

import { Flex } from "components";
import { Body1, Body3 } from "components/texts";
import { ViewContainer } from "../mydashboard";
import { useDispatch } from "react-redux";
import { setSensorData } from "features/sensor/action";

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

  const [motorActive, setMotorActive] = useState<boolean>(false);
  const [fanActive, setFanActive] = useState<boolean>(false);
  const actuators = [
    {
      id: "1",
      title: "Lights",
      active: motorActive,
      setActive: setMotorActive,
      command: motorActive ? "loff" : "lon",
    },
    {
      id: "2",
      title: "Fan",
      active: fanActive,
      setActive: setFanActive,
      command: fanActive ? "foff" : "fon",
    },
  ];

  const dispatch = useDispatch();
  return (
    <ViewContainer>
      <Body1 lineHeight={32} fontWeight="700" color="#0D1829">
        Motors And Acctuators
      </Body1>

      <Flex gap={3} marginTop={8} marginBottom={5}>
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

      <Flex gap={3}>
        {actuators.map((item) => (
          <Flex gap={0.5} key={item.id}>
            <Body3>{item.title}</Body3>
            <Switch
              checked={item.active}
              onChange={() => {
                item.setActive((prev) => !prev);
                dispatch(setSensorData({ command: item.command }));
              }}
            />
          </Flex>
        ))}
      </Flex>
    </ViewContainer>
  );
}

export default MotorContainer;
