import { Icon } from "@iconify/react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  /* margin-right: 32px; */
  white-space: pre;
  `;
export const StyledIcon = styled(Icon)`
  color: var(--black);
  padding-right: 30px
`;

export const StyledIconNotification = styled(StyledIcon)`
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    background-color: var(--red);
    border-radius: 50%;
    position: absolute;
    right: -10px;
    top: -5px;
  }
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
  .user-name {
    font-weight: 700;
  }
  img {
    margin-left: 16px;
    width: 40px;
    border-radius: 50%;
  }
`;