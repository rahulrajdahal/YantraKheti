import React from "react";
import Chart from "react-google-charts";

export default function Graphs() {
  return (
    <Chart
      width={"500px"}
      height={"300px"}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={[
        ["Time", "Temperature", "Water Height", "Humidity"],
        ["1day", 135, 400, 200],
        ["3days", 123, 460, 250],
        ["1w", 156, 1120, 300],
        ["2w", 144, 540, 350],
      ]}
      options={{
        // Material design options
        chart: {
          title: "Hardware Data",
          subtitle:
            "Temperature, water height and humidity levels of hydroponics system. ",
        },
      }}
      // For tests
      rootProps={{ "data-testid": "2" }}
    />
  );
}
