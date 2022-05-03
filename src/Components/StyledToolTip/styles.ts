import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import {TooltipProps} from 'react-tooltip/dist/react-tooltip.d';


export const ReactTooltipStyled: typeof ReactTooltip = styled(ReactTooltip)<TooltipProps>`
  &.type-dark.place-top {
      background-color: blue;
      padding: 0.3rem 1rem;
      background: #FFFFFF;
      box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      text-align: left;
      &:after { 
        border-top-color: blue;
      }
    }
` as any;



