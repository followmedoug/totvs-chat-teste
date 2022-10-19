import React from "react";
import Container from "./style";
import Contact from "../../Molecules/Contact";

const ContactList = ({ contacts }) => {
  return (
    <Container>
      {contacts.map((contact, key) => (
        <Contact key={key} contact={contact} />
      ))}
    </Container>
  );
};

export default ContactList;
