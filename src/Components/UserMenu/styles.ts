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
  color: #333;
  margin-right: 30px;
`;

export const StyledIconNotification = styled(StyledIcon)`
  &:after{
    content: "";
    z-index: 10;
    overflow: hidden;
    /* transform: rotate(-135deg); */
    width: 120px;
    display: block; 
    background: #79A70A;
    background: linear-gradient(#9BC90D 0%, #79A70A 100%);
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 34px;
    right: 100px;
    clip-path: path('M0 52.5C0 37.036 12.536 24.5 28 24.5H123.248H185.373H203.105C221.138 24.5 237.982 15.4959 247.999 0.5V0.5V104.5V104.5C237.982 89.5041 221.138 80.5 203.105 80.5H185.874H123.75H28C12.536 80.5 0 67.964 0 52.5V52.5Z');
    height: 120px;
    width: 120px;
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