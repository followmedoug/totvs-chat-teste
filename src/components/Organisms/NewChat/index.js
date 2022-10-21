import React from "react";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { Container, Header, Button, Title, List, Item, Name } from "./style";
import Avatar from "../../Atoms/Avatar";

const NewChat = ({ closeNewChat, data, onClick, id }) => {
  return (
    <Container>
      <Header>
        <Button onClick={() => closeNewChat()}>
          <ArrowBackRoundedIcon style={{ color: "#fff" }} />
        </Button>
        <Title>Nova Conversa</Title>
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
