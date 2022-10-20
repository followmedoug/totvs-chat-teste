import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import Header from "../../Molecules/Header/index.js";
import Message from "../../Atoms/Message/index.js";

import {
  Container,
  ChatBody,
  ChatFooter,
  Input,
  InputWrapper,
  ButtonsWrapper,
  Button,
  EmojiWrapper,
} from "./style.js";

const ActionsButton = ({ handleOpenEmoji, handleCloseEmoji, open = true }) => {
  return (
    <ButtonsWrapper>
      <Button open={open} onClick={handleCloseEmoji}>
        <CloseRoundedIcon />
      </Button>
      <Button open onClick={handleOpenEmoji}>
        <MoodRoundedIcon style={{ color: open ? "#009688" : "" }} />
      </Button>
    </ButtonsWrapper>
  );
};

const ActiveChat = ({ user }) => {
  const body = useRef();

  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { author: 1, body: "E ai meu querido!" },
    { author: 2, body: "E ai meu querido!" },
    { author: 1, body: "E ai meu querido!" },
    { author: 2, body: "E ai meu querido!" },
    { author: 1, body: "E ai meu querido!" },
    { author: 2, body: "E ai meu querido!" },
    { author: 1, body: "E ai meu querido!" },
    { author: 2, body: "E ai meu querido!" },
    { author: 1, body: "E ai meu querido!" },
    { author: 2, body: "E ai meu querido!" },
    { author: 1, body: "E ai meu querido!" },
    { author: 2, body: "E ai meu querido!" },
    { author: 1, body: "E ai meu querido!" },
    { author: 2, body: "E ai meu querido!" },
    { author: 1, body: "E ai meu querido!" },
    { author: 2, body: "E ai meu querido!" },
    { author: 1, body: "E ai meu querido!" },
    { author: 2, body: "E ai meu querido!" },
    { author: 1, body: "E ai meu querido!" },
    { author: 2, body: "E ai meu querido!" },
  ]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [messages]);

  const handleEmojiClick = (e) => {
    setMessage(message + e.emoji);
  };

  const handleOpenEmoji = () => {
    setIsEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setIsEmojiOpen(false);
  };

  return (
    <Container>
      <Header
        name="Fulano de tal"
        avatarLink="https://www.w3schools.com/howto/img_avatar2.png"
        buttons={[<SearchRoundedIcon />, <MoreVertRoundedIcon />]}
      />
      <ChatBody ref={body}>
        {messages.map((msg, key) => (
          <Message user={user} key={key} data={msg} />
        ))}
      </ChatBody>
      <EmojiWrapper open={isEmojiOpen}>
        <EmojiPicker
          width="auto"
          previewConfig={{ showPreview: false }}
          onEmojiClick={handleEmojiClick}
        />
      </EmojiWrapper>
      <ChatFooter>
        <ActionsButton
          open={isEmojiOpen}
          handleOpenEmoji={handleOpenEmoji}
          handleCloseEmoji={handleCloseEmoji}
        />
        <InputWrapper>
          <Input
            type="text"
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </InputWrapper>
        <ButtonsWrapper>
          <Button open>
            <SendRoundedIcon />
          </Button>
        </ButtonsWrapper>
      </ChatFooter>
    </Container>
  );
};

export default ActiveChat;
