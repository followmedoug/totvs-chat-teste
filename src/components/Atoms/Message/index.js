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
  console.log(user);
  return (
    <>
      {!data ? (
        <></>
      ) : (
        <Container author={user.id === data?.origin?.id}>
          <MessageItem author={user.id === data?.origin?.id}>
            <TextWrapper>
              <Text>{data.content}</Text>
            </TextWrapper>
            <DateWrapper>
              <Date>19:00</Date>
            </DateWrapper>
          </MessageItem>
        </Container>
      )}
    </>
  );
};

export default Message;
