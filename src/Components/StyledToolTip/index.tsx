import { ReactTooltipStyled } from './styles'

interface ToolTipProps {
  children: React.ReactNode;
}

export const ToolTip = ({ children, ...rest }:ToolTipProps) => {
  return (
    <ReactTooltipStyled {...rest}>
      {children}
    </ReactTooltipStyled>
  )
}