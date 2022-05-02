import {StyledContainerMaisRealizados} from './styles'

interface ContainerMaisRealizadosProps {
  children: React.ReactNode
}

export const ContainerMaisRealizados = ({children}:ContainerMaisRealizadosProps) => {
  return(
    <StyledContainerMaisRealizados>
      <div className='maisrealizados'>{children}</div>
    </StyledContainerMaisRealizados>
  )
}