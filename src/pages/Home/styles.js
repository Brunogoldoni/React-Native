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

export const WrapperInput = styled.View`
  margin-top: 30px;
`;

export const Input = styled.TextInput`
  background-color: ${colors.BGInput};
  color: ${colors.white};
  font-size: 18px;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
`;

export const WrapperButton = styled.View`
  margin-top: 32px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.BGButton};
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  opacity: 0.7;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const MySkillsText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  margin-top: 48px;
`;
