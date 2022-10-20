import React from "react";
import IntroImg from "./IntroImg";
import { Container, Text, Title } from "./style";

const Intro = () => {
  return (
    <Container>
      <IntroImg />
      <Title>Totvs Chat</Title>
      <Text>
        O Totvs chat conecta ao seu telefone para sincronizar suas mensagens.{" "}
        <br />
        Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-fi.
      </Text>
    </Container>
  );
};

export default Intro;
