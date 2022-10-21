import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContainerMain from "./components/Templates/ContainerMain";
import Contacts from "./components/Templates/Contacts";
import Chat from "./components/Templates/Chat";

import { getActiveChatsRequest } from "./store/reducers/userSlice";

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [activeChat, setActiveChat] = useState({});

  useEffect(() => {
    dispatch(getActiveChatsRequest({ id: user.id }));
  }, []);

  return (
    <ContainerMain>
      <Contacts
        active={activeChat}
        onClick={(contact) => setActiveChat(contact)}
      />
      <Chat user={user} activeChat={activeChat} />
    </ContainerMain>
  );
};

export default App;
