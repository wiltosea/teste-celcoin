import { Icon } from "@iconify/react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  white-space: pre;
  .notification{
    &:after{
      background-color: var(--red);
      content: '@';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      color: transparent;
      position: absolute;
      margin-left: 11px;
      margin-bottom: 6px;
    }
  }
  .botao-sair{
    svg{
      margin-right: 10px !important;
      color: var(--red) !important;
    }
  }
`;

export const StyledIcon = styled(Icon)`
  color: #333;
  margin-right: 30px;
`;

export const UserContextMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: rgba(47,68,134,0.05);
  font-size: 14px;
  padding: 16px;
  border-radius: 50px;
  margin-right: 16px;
  height:56px;
  .user-name {
    font-weight: 700;
  }
  img {
    margin-left: 16px;
    width: 40px;
    border-radius: 50%;
  }
`;