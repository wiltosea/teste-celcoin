import styled from 'styled-components';
import Tippy, {TippyProps} from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';

const StyledTippy: typeof Tippy = styled(Tippy)<TippyProps>`
  /* margin-bottom: 24px; */
  border-radius: 6px;
  color: var(--black);
  background-color: var(--white);
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  transition: box-shadow 0.3s ease-in-out;

` as any;

export default StyledTippy;