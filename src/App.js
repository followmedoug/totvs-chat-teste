import React, { useState } from "react";

import ContainerMain from "./components/Templates/ContainerMain";
import Contacts from "./components/Templates/Contacts";
import Chat from "./components/Templates/Chat";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user);

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
