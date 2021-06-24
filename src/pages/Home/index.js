import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import { Button, SkillCard, Input } from "../../components";

import {
  Container,
  Title,
  GreetingsText,
  WrapperInput,
  WrapperButton,
  MySkillsTitle,
} from "./styles";

export default function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);
  const [greetings, setGreetings] = useState("");

  function handleAddNewSkill() {
    setMySkills((oldSkills) => [...oldSkills, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreetings("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetings("Good Afternoon");
    } else {
      setGreetings("Good Night");
    }
  }, []);

  return (
    <>
      <Container>
        <Title>Welcome, Bruno!</Title>
        <GreetingsText>{greetings}</GreetingsText>

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
