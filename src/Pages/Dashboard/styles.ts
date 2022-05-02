import styled from "styled-components";

export const ContentContainer = styled.div`
  margin: 2rem 2rem 0 2rem;
  width: calc(100% - 80px);
  `;

export const ContentContainerHistorico = styled.div`
  background-color: var(--white);
  padding: 1rem;
  color: var(--black);
  background-color: var(--white);
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 6px;
  width: 100%;
  &:hover{
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.3);
  }
`;

export const ContainerMaisRealizados = styled(ContentContainer)`
  width: 100%;
  margin: 0px;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  transition: box-shadow 0.3s ease-in-out;
  &:hover{
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.3);
  }
`

export const Main = styled.div`
  height: calc(100vh - 150px);
  overflow: hidden scroll ;
`;