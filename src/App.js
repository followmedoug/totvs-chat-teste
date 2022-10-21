import React, { useState } from "react";

import ContainerMain from "./components/Templates/ContainerMain";
import Contacts from "./components/Templates/Contacts";
import Chat from "./components/Templates/Chat";

const App = () => {
  const contacts = [
    {
      id: 1,
      name: "Fulano de Tal",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      date: "19:44",
      message: "Oi sumido",
    },
    {
      id: 2,
      name: "Fulano de Tal2",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      date: "19:45",
      message: "Cade o dinheiro que você ta me devendo?",
    },
  ];

  const [user, setUser] = useState({
    id: 1,
    avatar: "https://www.w3schools.com/howto/img_avatar2.png",
    name: "Douglas Mateus",
  });

  const [activeChat, setActiveChat] = useState({});

  return (
    <ContainerMain>
      <Contacts
        active={activeChat}
        contacts={contacts}
        onClick={(contact) => setActiveChat(contact)}
      />
      <Chat user={user} activeChat={activeChat} />
    </ContainerMain>
  );
};

export default App;
