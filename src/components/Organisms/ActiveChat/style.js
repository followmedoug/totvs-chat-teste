import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ChatBody = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  flex: 1;
  overflow-y: auto;
  padding: 20px 30px;
`;

const ChatFooter = styled.div`
  align-items: center;
  display: flex;
  height: 62px;
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  outline: 0;
  border-radius: 10px;
  font-size: 0.938rem;
  color: ${({ theme: { colors } }) => colors.text.darkGray};
  padding-left: 15px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const Button = styled.div`
  width: ${({ open }) => (open ? "40px" : "0")};
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: all ease 0.1s;
`;

const EmojiWrapper = styled.div`
  height: ${({ open }) => (open ? "450px" : "0")};
  overflow-y: hidden;
  transition: all ease 0.3s;
`;

export {
  Container,
  ChatBody,
  ChatFooter,
  Input,
  InputWrapper,
  ButtonsWrapper,
  Button,
  EmojiWrapper,
};
