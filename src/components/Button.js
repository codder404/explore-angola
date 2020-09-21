import styled from 'styled-components';

export const Button = styled.button`
  background: ${({primary}) => (primary ? "#ff4040" : "#0467FB")};
  border-radius: 4px;
  padding: ${({big}) => (big ? "1rem 4rem" : "0.625rem 1.25rem")};
  white-space: nowrap;
  color: #fff;
  font-size: ${({fontBig}) => (fontBig ? "1.25rem" : "1rem")};
  outline: none;
  border: none;
  font-family: "Ubuntu", sans-serif;

  &:hover {
    background: ${({primary}) => (primary ? "#0467FB" : "#ff4040")};
    transition: all 0.3s ease-out;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;