import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background.chat};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-bottom: 6px solid ${({ theme: { colors } }) => colors.border.chat};
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  color: #525252;
  margin-top: 30px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 16px;
  line-height: 1.7;
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 375px;
  border: 0;
  outline: 0;
  background-color: ${({ theme: { colors } }) => colors.background.secondary};
  border-radius: 10px;
  padding: 15px 20px;
  margin: 10px 0;
`;

const Button = styled.button`
  width: 375px;
  border: 0;
  outline: 0;
  color: ${({ theme: { colors } }) => colors.background.white};
  background-color: ${({ theme: { colors } }) => colors.border.chat};
  font-weight: bold;
  border-radius: 10px;
  padding: 15px 20px;
  font-size: 18px;
  cursor: pointer;

  :hover {
    background-color: #00bfa5;
  }
`;

export { Container, Text, Title, ContentWrapper, FormWrapper, Input, Button };
