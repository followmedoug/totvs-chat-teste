import React from "react";
import Avatar from "../../Atoms/Avatar";
import {
  Container,
  ContentWrapper,
  Line,
  Name,
  Date,
  Message,
  MessageWrapper,
} from "./style";

const Contact = ({ contact, onClick, active }) => {
  return (
    <Container active={active} onClick={() => onClick(contact)}>
      <Avatar
        size="big"
        src="https://www.w3schools.com/howto/img_avatar2.png"
      />
      <ContentWrapper>
        <Line>
          <>
            <Name>{contact?.name}</Name>
          </>
          <>
            <Date>{contact?.date}</Date>
          </>
        </Line>
        <Line>
          <MessageWrapper>
            <Message>{contact?.message}</Message>
          </MessageWrapper>
        </Line>
      </ContentWrapper>
    </Container>
  );
};

export default Contact;
