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

const Contact = ({ contact }) => {
  return (
    <Container>
      <Avatar size="big" src={contact.avatar} />
      <ContentWrapper>
        <Line>
          <>
            <Name>Teste 123</Name>
          </>
          <>
            <Date>12:51</Date>
          </>
        </Line>
        <Line>
          <MessageWrapper>
            <Message>
              Texto meramente ilustrativo Texto meramente ilustrativo Texto
              meramente ilustrativo Texto meramente ilustrativo Texto meramente
              ilustrativo Texto meramente ilustrativo Texto meramente
              ilustrativo Texto meramente ilustrativo Texto meramente
              ilustrativo Texto meramente ilustrativo Texto meramente
              ilustrativo{" "}
            </Message>
          </MessageWrapper>
        </Line>
      </ContentWrapper>
    </Container>
  );
};

export default Contact;
