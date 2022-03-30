import React, {useState} from "react";
import styled from "styled-components";

import { Body1, Body2, Body3, Body5 } from "components/texts";
import { Button, Flex } from "components";
import { useDispatch, useSelector } from "react-redux";
import { getSensorData } from "features/sensor/action";

export const ViewContainer = styled.div`
  margin: 2rem;
  width: 50%;
`;

const Card = styled.div`
  min-width: 30%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 12px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  background: #cad5e0;
`;
const makeitObject = (x: any):any => {

  let y = "{"
  for (let i = 0; i < x?.length; i++) {
    if (x[i] === "'") {
      y = y + '"'
    } else if (x[i] === " ") {

    }
    else {
      y = y + x[i]
    }

  }
  let data =  JSON.parse(y)
  return (Object.values(data))
}

function MyDashboardContainer() {
  const [splitVal, setSplitVal] = useState("")
  const dispatch = useDispatch();
  const cards = [
    { id: 0, title: "Temperature", value: "32°C" , dataName:"temp"},
    { id: 1, title: "Humidity", value: "16%", dataName:"humidity" },
    { id: 2, title: "Plant Height", value: "216 PPM" },
    { id: 3, title: "IR Value", value: "118 PPM" },
    { id: 4, title: "Co2", value: "1" },
    { id: 5, title: "CO Toxic Gas", value: "10cm" }
  ];

  const sensorState = useSelector((state: any) => state.sensor);
  const sensorMessage = sensorState.data.message;
  // console.log(typeof sensorMessage);
  // console.log(sensorMessage.split("b"));

  const sensorData = sensorState?.data;
  const split = sensorMessage?.substr(
    sensorMessage.indexOf("{") + 1,
    sensorMessage.lastIndexOf("}")
  );




  

  // const data  =  makeitObject(split)


  // console.log(split);

  // console.log("split: ", split[1]);
  // const objects =

  const handleGetData = () => {
    // console.log("GET DATA");
    dispatch(getSensorData());
  };
  
  // if(sensorState.loading){

  // }
  // else{
  //   console.log(split)
  //   let objectData = makeitObject(split)
  //   console.log(objectData)
  //   cards[0].value = objectData?.temp + " °C"
  //   cards[1].value = objectData?.humidity + "%"
  //   cards[2].value = objectData?.carbonDioxideValue + "ppm" || "CO2 Co2"
  //   cards[3].value = objectData?.toxicGasSensorValue + "ppm"
  //   cards[4].value = objectData?.irValue
  //   cards[5].value = objectData?.plantHeight + "cm"
  // }
 

  // PlantHeight cm
  // IRVALUE
  // tempe deg
  // carbondioxide PPM
  // toxic ppm

  return (
    <ViewContainer>
      <Body1 lineHeight={32} fontWeight="700" color="#0D1829">
        MY Dashboard
      </Body1>

      <Body2>{sensorState.loading ? <h4>LOADING...</h4> : sensorState.data?.message ?
      <Flex 
        wrap = "wrap"
        width="100%"
        justifyContent="space-between"
        gap={2}
        marginTop={4}
        marginBottom={2}
      > 
     
          {cards.map((item, index) => (
          
          <Card key={item.id}>
            <Body3 fontWeight="400">{item.title}</Body3>
            <Body5 marginTop={0.5}>{makeitObject(split)[item.id]}</Body5>
          </Card>
        ))}
      </Flex>
      :
      <div>Please click on get data to get the sensor data.</div>  
    }
      </Body2>



      <Button text="Get Data" onClick={handleGetData} />
    </ViewContainer>
  );
}

export default MyDashboardContainer;
