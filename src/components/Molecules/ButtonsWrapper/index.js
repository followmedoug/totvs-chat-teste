import Icon from "@mui/material/Icon";
import React from "react";
import { Container, IconWrapper } from "./style";

const ButtonsWrapper = ({ buttons = [] }) => {
  return (
    <Container>
      {buttons.map((btn, key) => (
        <IconWrapper key={key}>
          <Icon children={btn} />
        </IconWrapper>
      ))}
    </Container>
  );
};

export default ButtonsWrapper;
