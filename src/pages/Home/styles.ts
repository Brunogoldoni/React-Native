import styled from "styled-components/native";

import { colors } from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black};
  padding: 70px 30px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 24px;
  font-weight: bold;
`;

export const GreetingsText = styled.Text`
  color: ${colors.white};
  margin-top: 4px;
  font-size: 12px;
  font-weight: bold;
`;

export const WrapperInput = styled.View`
  margin-top: 30px;
`;

export const WrapperButton = styled.View`
  margin-top: 32px;
`;

export const MySkillsTitle = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  margin: 48px 0 16px 0;
`;
