import React from "react";
import { PropTypes } from "prop-types";

import { Container, ButtonText } from "./styles";

const Button = ({ onPress, title }) => {
  return (
    <Container onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  title: "",
};

export default Button;
