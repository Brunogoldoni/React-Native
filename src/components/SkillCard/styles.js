import styled from "styled-components/native";

import { colors } from "../../styles/colors";

export const ButtonSkills = styled.TouchableOpacity`
  background-color: ${colors.mediumDark};
  border-radius: 50px;
  margin-top: 16px;
  padding: 16px;
  align-items: center;
`;

export const MySkillsText = styled.Text`
  color: ${colors.white};
  font-size: 22px;
  font-weight: bold;
`;
