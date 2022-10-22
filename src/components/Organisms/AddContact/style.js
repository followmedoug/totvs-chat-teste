import styled from "styled-components";

const Container = styled.div`
  width: 35%;
  max-width: 415px;
  position: fixed;
  left: ${({ show }) => (show ? 0 : -500)};
  top: 0;
  bottom: 0;
  background-color: ${({ theme: { colors } }) => colors.background.white};
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  transition: all ease 0.3s;
`;

const Header = styled.header`
  display: flex;
  background-color: #00bfa5;
  align-items: center;
  padding: 60px 15px 15px 15px;
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  height: 40px;
  flex: 1;
  margin-left: 20px;
`;

const Title = styled.p`
  font-size: 19px;
  line-height: 0.5;
  margin-bottom: 14px;
  color: #fff;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 20px;
`;

const Input = styled.input`
  flex: 1;
  margin-bottom: 15px;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.background.secondary};
  border: 0;
  outline: 0;
`;

const FormButton = styled.button`
  flex: 1;
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

export {
  Container,
  Header,
  Button,
  Title,
  TitleWrapper,
  FormWrapper,
  Input,
  FormButton,
};
