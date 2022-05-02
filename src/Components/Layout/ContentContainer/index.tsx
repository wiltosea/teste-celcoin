import {StyledContentContainer} from './styles'

interface ContentContainerProps {
  children: React.ReactNode
}

export const ContentContainer = ({children}:ContentContainerProps) => {
  return(
    <StyledContentContainer>
      {children}
    </StyledContentContainer>
  )
}