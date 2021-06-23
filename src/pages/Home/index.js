import React, { useState } from "react";

import {
  Container,
  Title,
  WrapperInput,
  Input,
  WrapperButton,
  Button,
  ButtonText,
  MySkillsTitle,
  ButtonSkills,
  MySkillsText,
} from "./styles";
export default function App() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills((oldSkills) => [...oldSkills, newSkill]);
  }

  return (
    <>
      <Container>
        <Title>Welcome, Bruno!</Title>

        <WrapperInput>
          <Input
            placeholder="New skill"
            onChangeText={setNewSkill}
            placeholderTextColor="#555"
          />
        </WrapperInput>

        <WrapperButton>
          <Button onPress={handleAddNewSkill}>
            <ButtonText>Add</ButtonText>
          </Button>
        </WrapperButton>

        <MySkillsTitle>My Skills: </MySkillsTitle>

        {mySkills.map((skill) => (
          <ButtonSkills key={skill}>
            <MySkillsText>{skill}</MySkillsText>
          </ButtonSkills>
        ))}
      </Container>
    </>
  );
}
