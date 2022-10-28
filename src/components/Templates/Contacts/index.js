import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../Molecules/Header";
import SearchBar from "../../Molecules/SearchBar";
import ContactList from "../../Organisms/ContactList";
import NewChat from "../../Organisms/NewChat";
import AddContact from "../../Organisms/AddContact";
import { getContactsRequest } from "../../../store/reducers/contactSlice";
import Container from "./style";
import { getActiveChatsRequest } from "../../../store/reducers/userSlice";

const Contacts = ({ onClick, active }) => {
  const dispatch = useDispatch();

  const id = localStorage.getItem("user_id");

  const { data } = useSelector((state) => state.contact);
  const { activeChats } = useSelector((state) => state.user);

  const [showNewChat, setShowNewChat] = useState(false);
  const [showNewContact, setShowNewContact] = useState(false);

  const handleNewChat = () => {
    dispatch(getContactsRequest());
    setShowNewChat(true);
  };

  useEffect(() => {
    dispatch(getContactsRequest());
  }, []);

  useEffect(() => {
    dispatch(getActiveChatsRequest({ id }));
  }, [id]);

  return (
    <Container>
      {showNewChat ? (
        <NewChat
          id={id}
          data={data}
          closeNewChat={() => {
            setShowNewChat(false);
          }}
          show={showNewChat}
          onClick={onClick}
        />
      ) : showNewContact ? (
        <AddContact
          show={showNewContact}
          closeAddContact={() => setShowNewContact(false)}
        />
      ) : (
        <>
          <Header
            showButton
            avatarLink="https://www.w3schools.com/howto/img_avatar2.png"
            avatarDescription="Avatar do usuário da conta"
            onClick={() => handleNewChat()}
            handleAddContact={() => setShowNewContact(true)}
          />
          <SearchBar />
          <ContactList
            id={id}
            active={active}
            onClick={onClick}
            contacts={activeChats}
          />
        </>
      )}
    </Container>
  );
};

export default Contacts;
