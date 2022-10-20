import styled from "styled-components";

const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 70px;
  padding: 0 15px;
  background-color: ${({ active, theme: { colors } }) =>
    active ? colors.background.hover : "inherit"};

  :hover {
    background-color: ${({ theme: { colors } }) => colors.background.hover};
  }
`;

const ContentWrapper = styled.div`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border.primary};
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  padding-right: 15px;

  flex-wrap: wrap;
  min-width: 0;
`;

const Line = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Name = styled.p`
  font-size: 1.063rem;
  color: ${({ theme: { colors } }) => colors.text.black};
  margin: 0;
`;

const Date = styled.p`
  font-size: 0.75rem;
  color: ${({ theme: { colors } }) => colors.text.gray};
`;

const MessageWrapper = styled.div`
  font-size: 0.875rem;
  color: ${({ theme: { colors } }) => colors.text.gray};
  display: flex;
  width: 100%;
`;

const Message = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`;

export { Container, ContentWrapper, Line, Name, Date, Message, MessageWrapper };
