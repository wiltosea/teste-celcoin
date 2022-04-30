import styled from 'styled-components';
import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';

export const StyledCard: typeof Card = styled(Card)<CardProps>`
  margin-bottom: 24px;
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