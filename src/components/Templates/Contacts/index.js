import React, { useState } from "react";
import ChatRounded from "@mui/icons-material/ChatRounded";
import MoreVertRounded from "@mui/icons-material/MoreVertRounded";

import Header from "../../Molecules/Header";
import SearchBar from "../../Molecules/SearchBar";
import ContactList from "../../Organisms/ContactList";
import NewChat from "../../Organisms/NewChat";
import Container from "./style";

const buttons = [<ChatRounded />, <MoreVertRounded />];

const Contacts = ({ contacts = [], onClick, active }) => {
  const [showNewChat, setShowNewChat] = useState(true);
  return (
    <Container>
      {/** TODO refatorar newChat e Header */}
      {showNewChat ? (
        <NewChat closeNewChat={() => setShowNewChat(false)} />
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
