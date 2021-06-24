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

interface SkillData {
  id: string;
  name: string;
}

export default function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [grettings, setGrettings] = useState("");

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills((oldSkills) => [...oldSkills, data]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGrettings("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGrettings("Good Afternoon");
    } else {
      setGrettings("Good Night");
    }
  }, []);

  return (
    <>
      <Container>
        <Title>Welcome, Bruno!</Title>
        <GreetingsText>{grettings}</GreetingsText>

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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SkillCard skill={item.name} />}
        />
      </Container>
    </>
  );
}
