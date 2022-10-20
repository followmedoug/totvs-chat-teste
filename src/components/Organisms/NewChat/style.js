import styled from "styled-components";

const Container = styled.div`
  width: 35%;
  max-width: 415px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ theme: { colors } }) => colors.background.white};
  display: flex;
  flex-direction: column;
  border-right: 1ps solid #ddd;
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

const Title = styled.p`
  font-size: 19px;
  height: 40px;
  line-height: 2;
  flex: 1;
  color: #fff;
  margin-left: 20px;
`;
const List = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme: { colors } }) => colors.background.hover};
  }
`;

const Name = styled.p`
  font-size: 1.063rem;
  color: #000;
  margin-left: 15px;
`;

export { Container, Header, Button, Title, List, Item, Name };
