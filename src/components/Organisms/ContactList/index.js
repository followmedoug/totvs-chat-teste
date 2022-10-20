import React from "react";
import Container from "./style";
import Contact from "../../Molecules/Contact";

const ContactList = ({ contacts, onClick, active }) => {
  return (
    <Container>
      {contacts.map((contact, key) => (
        <Contact
          active={active.id === contact.id}
          onClick={onClick}
          key={key}
          contact={contact}
        />
      ))}
    </Container>
  );
};

export default ContactList;
