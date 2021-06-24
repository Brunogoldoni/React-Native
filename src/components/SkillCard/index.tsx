import React from "react";
import { TouchableOpacityProps } from "react-native";

import { ButtonSkills, MySkillsText } from "./styles";

interface SkillCArdProps extends TouchableOpacityProps {
  skill: string;
}

const SkillCard = ({ skill, ...rest }: SkillCArdProps) => {
  return (
    <ButtonSkills
      {...rest}
    >
      <MySkillsText>{skill}</MySkillsText>
    </ButtonSkills>
  );
};

export default SkillCard;
