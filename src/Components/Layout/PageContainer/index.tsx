import {StyledPageContainer} from './styles'

interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({children}:PageContainerProps) => {
  return(
    <StyledPageContainer>
      {children}
    </StyledPageContainer>
  )
}