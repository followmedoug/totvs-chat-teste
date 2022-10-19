import styled from "styled-components";

const Container = styled.section`
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.background.secondary};
  height: 100vh;
`;

export default Container;
