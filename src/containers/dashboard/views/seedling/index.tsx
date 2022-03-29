import { Button, Flex } from "components";
import { Body1, Title1 } from "components/texts";
import { getSeedlingData } from "features/seedling/action";
import React, { ChangeEvent, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { ViewContainer } from "../mydashboard";

function SeedlingContainer() {
  const [form, setForm] = useState<any>();

  const dispatch = useDispatch();

  const seedlingState = useSelector((state: RootStateOrAny) => state.seedling);

  console.log(seedlingState)
  
  return (
    <ViewContainer>
      <Body1 lineHeight={32} fontWeight="700" color="#0D1829" marginBottom={5}>
        SeedlingContainer
      </Body1>

      <Flex direction="column" gap={4}>
        <input
          type="file"
          onChange={(e: any) => {
            setForm(e.target.files[0]);
          }} 
        />
        <Button
          text="Seed Data"
          onClick={() => {
            const formData = new FormData();
            formData.append("img", form, form.name);

            dispatch(getSeedlingData(formData));
          }}
        />
      </Flex>

      {seedlingState.loading ? <Title1>Loading...</Title1> :<p> {seedlingState.data?.predcitedValue}</p>}

    </ViewContainer>
  );
}

export default SeedlingContainer;
