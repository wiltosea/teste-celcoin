import styled from "styled-components";
import { Button } from 'antd';
import {ButtonProps} from "antd/lib/button";


export const StyledButton: typeof Button = styled(Button)<ButtonProps>`
  background: linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%);
  border-radius: 20px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 1px;
  color: var(--white) !important;
  transition: all 0.3s ease-in-out;
  height: 24px;
  line-height: 24px !important;
  padding: 0 20px !important;
  margin-left: 8px;
  align-self: center;
  &:hover {
    background: linear-gradient(273.35deg, #00A3FF 0%, #0057FF 100%);
  }
` as any;