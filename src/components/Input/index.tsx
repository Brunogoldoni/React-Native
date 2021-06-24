import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input = ({ ...rest }: InputProps) => {
  return (
    <Container
      {...rest}
    />
  );
};

export default Input;
