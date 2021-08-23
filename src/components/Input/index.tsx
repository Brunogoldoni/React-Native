import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChangeText: Function;
  placeholderTextColor: string;
}

const Input = ({ onChangeText, ...rest }: InputProps) => {
  return (
    <Container
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

export default Input;
