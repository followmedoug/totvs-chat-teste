import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background.white};
  border-bottom: 1px solid #eee;
  padding: 5px 15px;
`;

const InputWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background.secondary};
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const Input = styled.input`
  flex: 1;
  border: 0;
  outline: 0;
  background-color: transparent;
  margin-left: 10px;
`;

export { Container, Input, InputWrapper };
