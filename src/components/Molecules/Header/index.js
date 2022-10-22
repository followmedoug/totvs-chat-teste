import React from "react";
import ChatRounded from "@mui/icons-material/ChatRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";

import Avatar from "../../Atoms/Avatar";
import ButtonsWrapper from "../../Molecules/ButtonsWrapper";
import { Container, AvatarWrapper, Name, IconWrapper } from "./style";

const Header = ({
  avatarLink,
  avatarDescription,
  name = "",
  onClick,
  showButton,
  handleAddContact,
}) => {
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
      {showButton && (
        <ButtonsWrapper>
          <IconWrapper onClick={handleAddContact}>
            <PersonAddAltRoundedIcon />
          </IconWrapper>
          <IconWrapper onClick={onClick}>
            <ChatRounded />
          </IconWrapper>
        </ButtonsWrapper>
      )}
    </Container>
  );
};

export default Header;
