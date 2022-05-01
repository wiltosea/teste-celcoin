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
  .ant-card-head {
    border-bottom: 0px;
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
  height: 358px;
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
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 900;
  color: #303B5B48;
`;

export const Name = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #303B5B;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
`;
