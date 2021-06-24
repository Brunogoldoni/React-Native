import React from "react";

import { ButtonSkills, MySkillsText } from "./styles";

const SkillCard = ({ skill }) => {
  return (
    <ButtonSkills>
      <MySkillsText>{skill}</MySkillsText>
    </ButtonSkills>
  );
};

export default SkillCard;
