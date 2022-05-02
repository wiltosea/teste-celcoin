import {StyledContentContainerHistorico} from './styles'

interface ContentContainerHistoricoProps {
  children: React.ReactNode
}

export const ContentContainerHistorico = ({children}:ContentContainerHistoricoProps) => {
  return(
    <StyledContentContainerHistorico>
      {children}
    </StyledContentContainerHistorico>
  )
}