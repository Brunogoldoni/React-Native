import React, { useState } from "react";
import { FlatList } from "react-native";

import { Button, SkillCard, Input } from "../../components";

import {
  Container,
  Title,
  WrapperInput,
  WrapperButton,
  MySkillsTitle,
} from "./styles";

export default function Home() {
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
          <Button title="Add" onPress={handleAddNewSkill} />
        </WrapperButton>

        <MySkillsTitle>My Skills: </MySkillsTitle>

        <FlatList
          data={mySkills}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <SkillCard skill={item} />}
        />
      </Container>
    </>
  );
}
