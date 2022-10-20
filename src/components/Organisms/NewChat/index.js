import React, { useState } from "react";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { Container, Header, Button, Title, List, Item, Name } from "./style";
import Avatar from "../../Atoms/Avatar";

const NewChat = ({ closeNewChat }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Douglas Mateus",
    },
    {
      id: 2,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Douglas Mateus",
    },
    {
      id: 3,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Douglas Mateus",
    },
    {
      id: 4,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Douglas Mateus",
    },
  ]);

  return (
    <Container>
      <Header>
        <Button onClick={() => closeNewChat()}>
          <ArrowBackRoundedIcon style={{ color: "#fff" }} />
        </Button>
        <Title>Nova Conversa</Title>
      </Header>
      <List>
        {items.map((item) => (
          <Item key={item.id}>
            <Avatar size="big" src={item.avatar} alt="imagem do contato" />
            <Name>{item.name}</Name>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default NewChat;
