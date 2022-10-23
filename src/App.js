import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContainerMain from "./components/Templates/ContainerMain";
import Contacts from "./components/Templates/Contacts";
import Chat from "./components/Templates/Chat";

import { getActiveChatsRequest } from "./store/reducers/userSlice";

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [activeChat, setActiveChat] = useState({});

  const handleActiveChats = () => {
    const id = localStorage.getItem("user_id");

    if (id) dispatch(getActiveChatsRequest({ id }));
  };

  return (
    <ContainerMain>
      <Contacts
        active={activeChat}
        onClick={(contact) => {
          setActiveChat(contact);
          handleActiveChats();
        }}
      />
      <Chat user={user} activeChat={activeChat} />
    </ContainerMain>
  );
};

export default App;
