import {StyledButton} from './styles';

interface ButtonProps {
  href: string,
  textTitle: string,
  typeButton?: string,
  type?: string,
}

export const Button = ({href, textTitle, typeButton}:ButtonProps) => {
  return (<>
        <StyledButton href={href} type={
        typeButton==='primary'?'primary':'ghost'}>{textTitle}</StyledButton>
        </>
  )
}

export default Button;