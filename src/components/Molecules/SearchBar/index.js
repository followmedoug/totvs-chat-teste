import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Container, Input, InputWrapper } from "./style";

const SearchBar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchRoundedIcon />
        <Input
          type="search"
          placeholder="Pesquisar ou começar uma nova conversa"
        />
      </InputWrapper>
    </Container>
  );
};

export default SearchBar;
