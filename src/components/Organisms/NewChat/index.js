import React from "react";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import {
  Container,
  Header,
  Button,
  Title,
  List,
  Item,
  Name,
  TitleWrapper,
} from "./style";
import Avatar from "../../Atoms/Avatar";

const NewChat = ({ closeNewChat, data, onClick, id, show }) => {
  return (
    <Container show={show}>
      <Header>
        <Button onClick={() => closeNewChat()}>
          <ArrowBackRoundedIcon style={{ color: "#fff" }} />
        </Button>
        <TitleWrapper>
          <Title>Nova Conversa</Title>
        </TitleWrapper>
      </Header>
      <List>
        {data
          .filter((item) => item.id !== id)
          .map((item) => (
            <Item key={item.id} onClick={() => onClick(item)}>
              <Avatar
                size="big"
                src="https://www.w3schools.com/howto/img_avatar2.png"
                alt="imagem do contato"
              />
              <Name>{item.name}</Name>
            </Item>
          ))}
      </List>
    </Container>
  );
};

export default NewChat;
