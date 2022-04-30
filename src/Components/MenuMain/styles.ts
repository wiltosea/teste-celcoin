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
  &.active{
    background-color: var(--gray);
    color: var(--dark);
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    /* background-image: url("data:image/svg+xml; utf-8, <svg width='248' height='105' viewBox='0 0 248 105' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M0 52.5C0 37.036 12.536 24.5 28 24.5H123.248H185.373H203.105C221.138 24.5 237.982 15.4959 247.999 0.5V0.5V104.5V104.5C237.982 89.5041 221.138 80.5 203.105 80.5H185.874H123.75H28C12.536 80.5 0 67.964 0 52.5V52.5Z' fill='gray'/>
</svg>
"); */
    background-position: center center;
    width: 204px;
    overflow: visible;
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
  padding-left: 15px;
  .iconify{
    margin-right: 14px;
    color: white;
  }
}
`;