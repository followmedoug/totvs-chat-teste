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
  const id = localStorage.getItem("user_id");

  return (
    <>
      {!data ? (
        <></>
      ) : (
        <Container author={id === data?.origin?.id}>
          <MessageItem author={id === data?.origin?.id}>
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
