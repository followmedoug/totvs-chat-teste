import React from "react";
import ActiveChat from "../../Organisms/ActiveChat";
import Intro from "../../Organisms/Intro";
import Container from "./style";

const Chat = ({ activeChat, user }) => {
  return (
    <Container>
      {!activeChat.id ? (
        <Intro />
      ) : (
        <ActiveChat user={user} contact={activeChat} />
      )}
    </Container>
  );
};

export default Chat;
