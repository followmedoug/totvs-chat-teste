import React from "react";
import {
  Container,
  MessageItem,
  Text,
  TextWrapper,
  Date,
  DateWrapper,
} from "./style";

const Message = ({ data, user }) => {
  return (
    <Container author={user.id === data.author}>
      <MessageItem author={user.id === data.author}>
        <TextWrapper>
          <Text>{data.body}</Text>
        </TextWrapper>
        <DateWrapper>
          <Date>19:00</Date>
        </DateWrapper>
      </MessageItem>
    </Container>
  );
};

export default Message;
