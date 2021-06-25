import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import { colors } from '../../styles/colors';

import Icon from 'react-native-vector-icons/Feather';

import { Button, SkillCard, Input } from "../../components";

import {
  Container,
  Title,
  GrettingsText,
  WrapperInput,
  WrapperButton,
  MySkillsTitle,
  WrapperItemsList,
  WrapperSkillCard,
  WrapperIcon
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

    setMySkills((oldState) => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
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
        <GrettingsText>{grettings}</GrettingsText>
        <Title>Welcome, Bruno!</Title>

        <WrapperInput>
          <Input
            placeholder="New skill"
            onChangeText={setNewSkill}
            placeholderTextColor={`${colors.phTextColor}`}
          />
        </WrapperInput>

        <WrapperButton>
          <Button title="Add" onPress={handleAddNewSkill} />
        </WrapperButton>

        <MySkillsTitle>My Skills: </MySkillsTitle>

        <FlatList
          data={mySkills}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            <WrapperItemsList>
              <WrapperSkillCard>
                <SkillCard
                  skill={item.name}
                />
              </WrapperSkillCard>

              <WrapperIcon>
                <Icon
                  name="x"
                  size={18}
                  color={`${colors.white}`}
                  onPress={() => handleRemoveSkill(item.id)}
                />
              </WrapperIcon>
            </WrapperItemsList>
          }
        />
      </Container>
    </>
  );
}
