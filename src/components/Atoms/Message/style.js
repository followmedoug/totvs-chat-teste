import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: ${({ author }) => (author ? "flex-end" : "flex-start")};
  margin-bottom: 10px;
`;

const MessageItem = styled.div`
  background-color: ${({ author, theme: { colors } }) =>
    author ? "#dcf8c6" : colors.background.white};
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  padding: 3px;
`;

const TextWrapper = styled.div`
  margin: 5px 40px 5px 5px;
`;

const Text = styled.p`
  font-size: 0.875rem;
  margin: 0;
`;

const DateWrapper = styled.div`
  margin-right: 5px;
  text-align: right;
  height: 15px;
  margin-top: -15px;
`;

const Date = styled.p`
  margin: 0;
  font-size: 11px;
  color: #999;
`;

export { Container, MessageItem, Text, TextWrapper, Date, DateWrapper };
