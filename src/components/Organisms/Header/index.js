import React from "react";
import Avatar from "../../Atoms/Avatar";
import ButtonsWrapper from "../../Molecules/ButtonsWrapper";
import Container from "./style";

const Header = ({ avatarLink, avatarDescription, buttons }) => {
  return (
    <Container>
      <Avatar src={avatarLink} alt={avatarDescription} />
      <ButtonsWrapper buttons={buttons} />
    </Container>
  );
};

export default Header;
