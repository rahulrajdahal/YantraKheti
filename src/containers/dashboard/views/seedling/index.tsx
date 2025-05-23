import { Button, Flex } from "components";
import { Body1, Body2, Body3 } from "components/texts";
import { getSeedlingData } from "features/seedling/action";
import { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { ViewContainer } from "../mydashboard";

const Image = styled.img`
  width: 15rem;
  height: 15rem;

  border-radius: 16px;
`;
function SeedlingContainer() {
  const [form, setForm] = useState<any>();

  const [imgObjUrl, setImgObjUrl] = useState<any>();
  const dispatch = useDispatch();

  const seedlingState = useSelector((state: RootStateOrAny) => state.seedling);

  return (
    <ViewContainer>
      <Body1 lineHeight={32} fontWeight="700" color="#0D1829" marginBottom={5}>
        Upload a picture of a seed to identify...
      </Body1>

      <Flex>
        <Flex direction="column" width="100%" justifyContent="space-evenly">
          {imgObjUrl && <Image src={imgObjUrl} alt="seed" />}
          <Flex direction="column" gap={4}>
            <Body3>
              Please add a <b>250x250</b> image
            </Body3>
            <input
              type="file"
              onChange={(e: any) => {
                setForm(e.target.files[0]);
                setImgObjUrl(URL.createObjectURL(e.target.files[0]));
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
        </Flex>
        {seedlingState.loading ? (
          <Body2 style={{ whiteSpace: "nowrap" }}>Analyzing seed...</Body2>
        ) : (
          <Body2 style={{ whiteSpace: "nowrap" }}>
            Seedling identified as a {seedlingState.data?.predcitedValue} seed.
          </Body2>
        )}
      </Flex>
    </ViewContainer>
  );
}

export default SeedlingContainer;
