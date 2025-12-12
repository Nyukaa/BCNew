import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.$primary ? "Bisque" : "blue")};
  color: ${(props) => (props.$primary ? "black" : "white")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Chocolate;
  border-radius: 3px;
  cursor: pointer;
`;
const Input = styled.input`
  margin: 0.25em;
`;
export { Button, Input };
