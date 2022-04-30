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
`;

export const ItemMenuLi = styled.li`
  list-style: none;
  padding: 0;
  height: 56px;
  font-size: 16px;
  /* background: var(--gray); */
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
  display: flex;
  align-items: center;
  padding-left: 28px;
  a{
    color: var(--white);
    /* color: var(--black); */
    font-weight: 500;
    text-decoration: none;

    .active{
      background-color: var(--gray);
      text-decoration: underline;
    }
  }
`;