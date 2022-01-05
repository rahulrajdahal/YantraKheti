import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Switch,
  Button,
  Slider,
} from "@material-ui/core";

import lightOn from "../../assets/images/light-on.png";
import lightOff from "../../assets/images/light-off.png";
import motorOn from "../../assets/images/motor-on.gif";
import motorOff from "../../assets/images/motor-off.jpg";
import { Thermostat } from "@mui/icons-material";
import Chart from "react-google-charts";

export default function Sensors() {
  const [tab, setTab] = useState<string>("Graph Data");

  const [temp, setTemp] = useState<number>(32);
  const [humidity, setHumidity] = useState<number>(62);

  const tabs = [
    { id: 1, name: "Graph Data" },
    { id: 2, name: "Sensor" },
  ];

  const [motor1, setMotor1] = useState<boolean>(true);
  const [motor2, setMotor2] = useState<boolean>(false);
  const [motor3, setMotor3] = useState<boolean>(false);
  const [motor4, setMotor4] = useState<boolean>(true);

  const motors = [
    { id: 1, name: "Motor 1", active: motor1 },
    { id: 2, name: "Motor 2", active: motor2 },
    { id: 3, name: "Motor 3", active: motor3 },
    { id: 4, name: "Motor 4", active: motor4 },
  ];

  const [light, setLight] = useState<boolean>(false);
  const [motor, setMotor] = useState<boolean>(false);

  const handleHumidityChange = (e: any, value: any) => {
    setHumidity(value);
  };

  const handleMotorChange = (item: any) => {
    setMotor((prev) => !prev);
    if (item === 1) {
      setMotor1((prev) => !prev);
    } else if (item === 2) {
      setMotor2((prev) => !prev);
    } else if (item === 3) {
      setMotor3((prev) => !prev);
    } else if (item === 4) {
      setMotor4((prev) => !prev);
    }
  };

  return (
    <Grid
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <Grid item md={4}>
        <Box display="inline-flex" alignItems="center">
          <img
            src={light ? lightOn : lightOff}
            alt="lights"
            width={100}
            height={"auto"}
          />
          <div style={{ marginLeft: 24 }}>
            <Typography variant="h5">Intensity</Typography>
            <Typography variant="h3">36.37 LUX</Typography>
            <Typography variant="h4">Lights</Typography>
            <Switch onChange={() => setLight((prev) => !prev)} />
          </div>
        </Box>
      </Grid>

      <Grid item md={4}>
        <div>
          <Typography variant="h4">Humidity</Typography>

          <Typography variant="h3">{humidity}º%</Typography>

          <Chart
            width={"100%"}
            height={120}
            chartType="Gauge"
            loader={<div>Loading Chart</div>}
            data={[
              ["Label", "Value"],
              ["Humidity", humidity],
            ]}
            options={{
              redFrom: 90,
              redTo: 100,
              yellowFrom: 75,
              yellowTo: 90,
              minorTicks: 5,
            }}
            rootProps={{ "data-testid": "1" }}
          />

          <Slider
            aria-label="Volume"
            value={humidity}
            onChange={(e, value) => handleHumidityChange(e, value)}
          />
        </div>
      </Grid>

      <Grid item md={4}>
        <div>
          <Box display="inline-flex">
            <Thermostat />
            <Typography variant="h4">Temperature</Typography>
          </Box>
          <Typography variant="h3">{temp}ºC</Typography>
          <Button onClick={() => setTemp(temp + 1)}>Increase Temp</Button>
          <Button onClick={() => setTemp(temp - 1)}>Decrease Temp</Button>
        </div>
      </Grid>

      <Grid item md={12}>
        <Typography variant="h3">Motors</Typography>

        {motors.map((item) => (
          <Box display="inline-flex">
            <img
              src={item.active ? motorOn : motorOff}
              alt="lights"
              width={250}
              height={250}
            />
            <Typography variant="h4">{item.name}</Typography>

            <Switch
              checked={item.active}
              onChange={() => handleMotorChange(item.id)}
            />
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
