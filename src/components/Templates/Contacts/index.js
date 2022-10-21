import React, { useState, useEffect } from "react";
import ChatRounded from "@mui/icons-material/ChatRounded";
import MoreVertRounded from "@mui/icons-material/MoreVertRounded";

import Header from "../../Molecules/Header";
import SearchBar from "../../Molecules/SearchBar";
import ContactList from "../../Organisms/ContactList";
import NewChat from "../../Organisms/NewChat";
import Container from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getContactsRequest } from "../../../store/reducers/contactSlice";

const buttons = [<ChatRounded />, <MoreVertRounded />];

const Contacts = ({ contacts = [], onClick, active }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.contact);

  const [showNewChat, setShowNewChat] = useState(true);

  useEffect(() => {
    dispatch(getContactsRequest());
  }, []);

  return (
    <Container>
      {/** TODO refatorar newChat e Header */}
      {showNewChat ? (
        <NewChat
          data={data}
          closeNewChat={() => {
            setShowNewChat(false);
          }}
        />
      ) : (
        <>
          <Header
            avatarLink="https://www.w3schools.com/howto/img_avatar2.png"
            avatarDescription="Avatar do usuário da conta"
            buttons={buttons}
          />
          <SearchBar />
          <ContactList active={active} onClick={onClick} contacts={contacts} />
        </>
      )}
    </Container>
  );
};

export default Contacts;
