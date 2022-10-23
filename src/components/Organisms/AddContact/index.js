import React, { useState, useEffect } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import {
  Container,
  Header,
  Button,
  Title,
  TitleWrapper,
  FormWrapper,
  Input,
  FormButton,
} from "./style";
import { useDispatch } from "react-redux";
import { createContactRequest } from "../../../store/reducers/contactSlice";

const AddContact = ({ closeAddContact, show }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateContact = () => {
    dispatch(createContactRequest({ name, email }));
    closeAddContact();
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") {
        e.preventDefault();
        handleCreateContact();
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [name, email]);

  return (
    <Container show={show}>
      <Header>
        <Button onClick={closeAddContact}>
          <ArrowBackRoundedIcon style={{ color: "#fff" }} />
        </Button>
        <TitleWrapper>
          <Title>Adicionar contato</Title>
        </TitleWrapper>
      </Header>
      <FormWrapper>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Digite o nome do contato"
        />
        <Input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite o email do contato"
        />
        <FormButton onClick={() => handleCreateContact()}>Cadastrar</FormButton>
      </FormWrapper>
    </Container>
  );
};

export default AddContact;
