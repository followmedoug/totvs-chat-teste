import styled from "styled-components";

const Image = styled.img`
  width: ${({ size }) =>
    size === "big" ? "50px" : size === "small" ? "30px" : "40px"};
  height: ${({ size }) =>
    size === "big" ? "50px" : size === "small" ? "30px" : "40px"};
  border-radius: 50%;
  cursor: pointer;
`;

export default Image;
