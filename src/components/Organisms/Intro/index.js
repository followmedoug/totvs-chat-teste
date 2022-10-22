import React, { useState } from "react";
import { useDispatch } from "react-redux";
import IntroImg from "./IntroImg";
import {
  Container,
  Text,
  Title,
  ContentWrapper,
  FormWrapper,
  Input,
  Button,
} from "./style";

import { createUserRequest } from "../../../store/reducers/userSlice";

const Intro = () => {
  const dispatch = useDispatch();

  const id = localStorage.getItem("user_id");

  console.log(id);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCreate = () => {
    dispatch(createUserRequest({ name, email }));
  };

  return (
    <Container>
      {!id ? (
        <ContentWrapper>
          <Title>Primeira vez aqui?</Title>
          <Text>Aproveite para se cadastrar!</Text>
          <FormWrapper>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Qual o seu nome?"
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Qual o seu email?"
            />
          </FormWrapper>
          <Button onClick={() => handleCreate()}>Cadastrar</Button>
        </ContentWrapper>
      ) : (
        <>
          <IntroImg />
          <Title>Totvs Chat</Title>
          <Text>
            O Totvs chat conecta ao seu telefone para sincronizar suas
            mensagens. <br />
            Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-fi.
          </Text>
        </>
      )}
    </Container>
  );
};

export default Intro;
