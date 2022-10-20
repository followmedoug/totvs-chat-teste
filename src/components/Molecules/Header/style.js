import styled from "styled-components";

const Container = styled.header`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 15px;
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.p`
  margin-left: 15px;
`;

export { Container, AvatarWrapper, Name };
