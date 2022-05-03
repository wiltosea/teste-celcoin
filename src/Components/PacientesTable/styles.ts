import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  margin-bottom: 2rem;
  padding: 1rem;
  .headerContainer {
    display: flex;
    justify-content: space-between;
    > svg {
      cursor: pointer;
      color: rgba(44, 46, 61, 0.5);
    }
  }
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  h5{
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: rgba(86, 84, 104, 0.6);
    margin: 0;
  }
  .scrollable-table{
    height: 251px;
    overflow-y: scroll;
  }
  table{
    width: 100%;
    border-collapse:separate; 
    border-spacing: 0 0.5em;
  }
  td{
    border: 1px solid var(--gray);
    padding: 0px;
  }
  tr {
    margin-bottom: 8px;
    margin: 0;
    padding: 0;
    border: 0;
  }
`;

export const TdCardPaciente = styled.td`
    border-radius: 6px 0 0 6px;
  .td-card-paciente-info{
    padding: 1rem 1rem 0 1rem !important;
    margin: 0;
    display: flex;
    width: 368px;
    img{
      border-radius: 6px;
      margin-right: 1rem;
      width: 64px;
      height: 64px;
    }
    .td-card-info-details{
      .nome-paciente{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        margin: 0;
        padding: 0;
      }
      .diagnostico {
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
        color: #1EAC79;
      }
    }
  }
  
  `;

  export const TdTestes = styled.td`
  padding: 0 1rem 0 1rem !important;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    /* line-height: 36px; */
    align-items: center;
    letter-spacing: 1px;
    color: #1EAC79;
    padding: 0 0px;
    margin: 0;
  }
  span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0px;
  }
  &.green {
    p, span{
      color: var(--green);
    }
  }
  &.red {
    p, span{
      color: var(--red);
    }
  }
  &.orange {
    p, span{
      color: var(--orange);
    }
  }

`;

export const TdActions = styled.td`
  border-radius: 0 6px 6px 0;
  padding: 0 1rem 0 1rem !important;
  text-align: end;
  svg {
    color: #145AD2;
    border: 1px solid var(--gray);
    height: 32px;
    width: 32px;
    border-radius: 50%;
    padding: 7px;
    align-self: center;
  }
`;