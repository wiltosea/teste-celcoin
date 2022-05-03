import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  padding-left: 4px;
  overflow: visible;
`;

export const ItemMenuLi = styled(Link)`
  color: var(--white);
      /* color: var(--black); */
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &.active{
    color: var(--dark);
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    width: 248px;
    overflow: visible;
    &:after {
      background-color: var(--gray);
      clip-path: path('M0 52.5C0 37.036 12.536 24.5 28 24.5H123.248H185.373H203.105C221.138 24.5 237.982 15.4959 247.999 0.5V0.5V104.5V104.5C237.982 89.5041 221.138 80.5 203.105 80.5H185.874H123.75H28C12.536 80.5 0 67.964 0 52.5V52.5Z');
      content: '';
      color: beige;
      height: 104px;
      width: 248px;
      position: absolute;
      z-index: -1;
      margin-top: -80px;
    }
    .iconify{
      color: var(--dark);
    }
    
  }
  li{
  list-style: none;
  padding: 0;
  height: 56px;
  font-size: 16px;

  display: flex;
  align-items: center;
  padding-left: 24px;
  .iconify{
    margin-right: 14px;
    color: white;
  }
}
`;