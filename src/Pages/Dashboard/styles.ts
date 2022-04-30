import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: calc(100vh - 64px);
  padding: 0px;
  margin-top: 32px;
  border-radius: 30px;
  margin-right: 40px;
`;

export const HeaderContainer = styled.div`
background: var(--white);
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 88px;
border-radius: 30px 30px 0px 0px;

div {
  display: flex;
  flex-direction: row;
  align-items: center;

}
`;

export const ContentContainer = styled.div`
  margin: 2rem;
  width: calc(100% - 80px);
  `;