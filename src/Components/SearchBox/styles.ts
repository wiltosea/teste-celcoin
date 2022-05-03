import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  padding: 10px;
  width: 400px;
  border-radius: 5px;
  background: #f5f5f5;
  margin-left: 32px;
  input {
    background-color: #f5f5f5;
    border: none;
    &:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
    outline-width: 0px;
}
  }
`;