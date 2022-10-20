import React from "react";
import Avatar from "../../Atoms/Avatar";
import ButtonsWrapper from "../../Molecules/ButtonsWrapper";
import { Container, AvatarWrapper, Name } from "./style";

const Header = ({ avatarLink, avatarDescription, buttons, name = "" }) => {
  return (
    <Container>
      {name !== "" ? (
        <AvatarWrapper>
          <Avatar src={avatarLink} alt={avatarDescription} />
          <Name>{name}</Name>
        </AvatarWrapper>
      ) : (
        <Avatar src={avatarLink} alt={avatarDescription} />
      )}
      <ButtonsWrapper buttons={buttons} />
    </Container>
  );
};

export default Header;
