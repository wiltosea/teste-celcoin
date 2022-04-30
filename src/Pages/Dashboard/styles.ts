import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 64px);
  padding: 0px;
  margin-top: 32px;
  border-radius: 30px;
`;

export const HeaderContainer = styled.div`
background: var(--white)
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  padding: 0px;
  margin-top: 32px;
  border-radius: 5px;
  background: #f5f5f5;
  input {
    background: transparent;
    border: none;
  }
`;
