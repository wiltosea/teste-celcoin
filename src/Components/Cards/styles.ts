import styled from 'styled-components';
import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';


export const StyledCard: typeof Card = styled(Card)<CardProps>`
  /* margin-bottom: 24px; */
  border-radius: 6px;
  color: var(--black);
  background-color: var(--white);
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  transition: box-shadow 0.3s ease-in-out;
  .ant-card-body {
  padding: 0 24px;
    .card-title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 54px;
      display: flex;
      align-items: center;
      letter-spacing: 1px;
      margin-bottom: 0;
    }
    .description{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
  
  .tooltip {
    background: var(--white);
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
    .multi-line{
      text-align: left;
      &:nth-child(2){
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        color: var(--black);
      }
      &:nth-child(3){
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 33px;
        display: flex;
        align-items: center;
        color: #1CBF84;
      }
    }
  }
  .negative {
    .multi-line{
      &:nth-child(3){color: red;}
    }
  }
  .ant-card-head {
    border-bottom: 0px;
    .ant-card-head-title {
      padding: 0px;
    }
  }
  .descricao {
    font-size: 16px;
  }
  &:hover{
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.3);
  }
` as any;

export const Indicador = styled.div`
  ${(positive) => positive ? 'background: var(--green);' : 'color: var(--red);'};
  color: var(--white);
  font-size: 10px;
  padding: 8px 16px;
  border-radius: 16px;
  font-weight: 700;
`;

export const StyledCardsHistorico = styled(StyledCard)`
  border: 1px solid var(--lightgray);
  box-shadow: none;
  &:hover{
    box-shadow: none;
  }
  .ant-card-cover{
     border-radius: 6px 0;
      display: flex;
      justify-content: center;
      background: url('./images/background-card-pacientes.png') no-repeat center center;
      background-size: cover;
      height: 136px;
      img{
        width: 72px;
        height: 72px;
        margin: auto 0;
      }
  }
`;

export const StyledCardMaisRealizado = styled(StyledCard)`
  height: 322px;
  border: none;
  h3{
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 35px;
    display: flex;
    align-items: center;
  }
  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
  }
  .quantidade-disponivel{
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 35px;
    padding-right: 10px;
  }
  .ant-card-cover{
     border-radius: 6px 0;
      display: flex;
      justify-content: center;

      height: 176px;
      img{
        width: 112px;
        height: 112px;
        margin: auto 0;
      }
  }
`;


export const SubTitle = styled.h4`
  font-weight: 800;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #303B5B48;
  font-style: normal;
  padding: 2px 0 4px 0;
  margin: 0;
`;

export const Name = styled.p`
    /* font-family: 'Open Sans'; */
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    padding-top: 16px;
    padding-bottom: 8px;
    margin-bottom: 0;
`;

export const TextResult = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #303B5B;
`;

export const StyledCardsAtualizacoesImportantes = styled.div`
  background-color: var(--white);
  border-radius: 6px;
  box-shadow: 0px 1px 26px rgba(71, 87, 122, 0.08);
  transition: box-shadow 0.3s ease-in-out;
  padding: 1rem 0 1rem 1rem;
  margin-bottom: 2rem;
  .nome {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
  &:hover{
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.3);
  }
  img{
    border-radius: 6px;
    height: 96px;
    width: 96px;
  }
`;

export const TestComplete = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #1EAC79;
  span{
    font-weight: 700;
  }
  &.cancelado {
    color: var(--red);
  }
`;
