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

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export { Container, AvatarWrapper, Name, IconWrapper };
