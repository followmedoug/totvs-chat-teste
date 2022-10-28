import React from "react";
import {
  Container,
  MessageItem,
  Text,
  TextWrapper,
  Date,
  DateWrapper,
} from "./style";

const Message = ({ data, contact }) => {
  const id = localStorage.getItem("user_id");

  const author = id === data?.origin?.id;

  return (
    <>
      {!data ? (
        <></>
      ) : (
        <Container author={author}>
          <MessageItem author={author}>
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
