import React from "react";
import { PropTypes } from "prop-types";

import { Container } from "./styles";

const Input = ({ placeholder, onChangeText, placeholderTextColor }) => {
  return (
    <Container
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholderTextColor: PropTypes.string,
};

export default Input;
