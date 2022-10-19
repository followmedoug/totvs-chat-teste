import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background.white};
  overflow-y: auto;
`;

export default Container;
