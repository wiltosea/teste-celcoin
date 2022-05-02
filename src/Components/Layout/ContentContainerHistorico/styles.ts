import styled from "styled-components";

export const StyledContentContainerHistorico = styled.div`
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
  .ant-row.scrollable-area {
    overflow-x: scroll;
    /* max-height: 290px; */
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    scroll-behavior: smooth;
  }
`;