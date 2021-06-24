import styled from "styled-components/native";

import { colors } from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  background-color: ${colors.BGButton};
  padding: 16px;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;
