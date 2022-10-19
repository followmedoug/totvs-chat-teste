import React from "react";
import ChatRounded from "@mui/icons-material/ChatRounded";
import MoreVertRounded from "@mui/icons-material/MoreVertRounded";

import Header from "../../Organisms/Header";
import ContactList from "../../Organisms/ContactList";
import SearchBar from "../../Molecules/SearchBar";
import Container from "./style";

const buttons = [<ChatRounded />, <MoreVertRounded />];

const Contacts = ({ contacts = [] }) => {
  return (
    <Container>
      <Header
        avatarLink="https://www.w3schools.com/howto/img_avatar2.png"
        avatarDescription="Avatar do usuário da conta"
        buttons={buttons}
      />
      <SearchBar />
      <ContactList contacts={contacts} />
    </Container>
  );
};

export default Contacts;
