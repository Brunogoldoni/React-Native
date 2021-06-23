import React from "react";

import {
  Container,
  Title,
  WrapperInput,
  Input,
  WrapperButton,
  Button,
  ButtonText,
  MySkillsText,
} from "./styles";
export default function App() {
  return (
    <>
      <Container>
        <Title>Welcome, Bruno!</Title>

        <WrapperInput>
          <Input placeholder="New skill" placeholderTextColor="#555" />
        </WrapperInput>

        <WrapperButton>
          <Button>
            <ButtonText>Add</ButtonText>
          </Button>
        </WrapperButton>

        <MySkillsText>My Skills</MySkillsText>
      </Container>
    </>
  );
}
