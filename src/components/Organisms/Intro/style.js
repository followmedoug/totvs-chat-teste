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

export { Container, Text, Title };
