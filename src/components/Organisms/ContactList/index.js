import React from "react";
import Container from "./style";
import Contact from "../../Molecules/Contact";

const ContactList = ({ contacts = [], onClick, active, id }) => {
  return (
    <Container>
      {contacts.length > 0 &&
        contacts
          .filter((item) => item?.id !== id)
          .map((contact, key) => (
            <Contact
              active={contact && active.id === contact.id}
              onClick={onClick}
              key={key}
              contact={contact}
            />
          ))}
    </Container>
  );
};

export default ContactList;
