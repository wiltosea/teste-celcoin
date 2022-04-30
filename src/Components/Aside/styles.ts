import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 40px;
  margin-top: 24px;
  margin-right: -1px;
  img{
    margin: 32px 16px 0px 0px;
  }
  hr {
    margin: 24px 0px;
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.1);
    width: 94%;
    text-align: left;
  }
`;