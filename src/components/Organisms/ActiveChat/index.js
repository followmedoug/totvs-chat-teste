import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { useDispatch, useSelector } from "react-redux";
import socketIOClient from "socket.io-client";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { sendMessageRequest } from "../../../store/reducers/userSlice";
import { getMessagesRequest } from "../../../store/reducers/messageSlice";

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

const { REACT_APP_BASEURL, REACT_APP_BASEURL_STG, REACT_APP_BASEURL_PRD } =
  process.env;

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

const ActiveChat = ({ user, contact }) => {
  const id = localStorage.getItem("user_id");

  const dispatch = useDispatch();
  const body = useRef();

  const { data } = useSelector((state) => state.message);

  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const env = window.location.hostname.split(".")[1];

    dispatch(getMessagesRequest());
    const socket = socketIOClient(
      !env
        ? REACT_APP_BASEURL
        : env === "stg"
        ? REACT_APP_BASEURL_STG
        : REACT_APP_BASEURL_PRD
    );
    socket.on("new_message", () => {
      dispatch(getMessagesRequest());
    });
  }, []);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [data]);

  const handleEmojiClick = (e) => {
    setMessage(message + e.emoji);
  };

  const handleOpenEmoji = () => {
    setIsEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setIsEmojiOpen(false);
  };

  const handleSendMessage = () => {
    dispatch(
      sendMessageRequest({
        content: message,
        contactOrigin: id,
        contactDestination: contact.id,
      })
    );
    setMessage("");
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") {
        e.preventDefault();
        handleSendMessage();
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [message]);

  return (
    <Container>
      <Header
        name={contact.name}
        avatarLink="https://www.w3schools.com/howto/img_avatar2.png"
        buttons={[<SearchRoundedIcon />, <MoreVertRoundedIcon />]}
      />
      <ChatBody ref={body}>
        {data
          .filter(({ origin }) => origin.id === id || origin.id === contact.id)
          .filter(
            ({ destination }) =>
              destination.id === id || destination.id === contact.id
          )
          .map((msg) => (
            <Message user={user} key={msg.id} data={msg} contact={contact} />
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
          <Button open onClick={() => handleSendMessage()}>
            <SendRoundedIcon />
          </Button>
        </ButtonsWrapper>
      </ChatFooter>
    </Container>
  );
};

export default ActiveChat;
