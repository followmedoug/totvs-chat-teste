import styled from "styled-components";

const Container = styled.section`
  border-right: 1px solid ${({ theme: { colors } }) => colors.border.primary};
  display: flex;
  flex-direction: column;
  max-width: 415px;
  width: 35%;
`;

export default Container;
